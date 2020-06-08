import RenderContext from '../RenderContext' 
import GLIndexBuffer from './GLIndexBuffer'
import GLVertexBuffer from './GLVertexBuffer'

export class Mesh {

  constructor({vertices, indices = null, dimension = 3, colors = null, texCoord}){
    this.dimension = dimension
    this.vertices = vertices
    this.indices = indices
    this.colors = colors
    this.texCoord = texCoord
    this.gl = RenderContext.getGL()
    this.program = RenderContext.getProgram()

    this.vertexBuffer = new GLVertexBuffer(
      'a_position', 
      new Float32Array(vertices), 
      dimension
    )

    if(this.colors) {
      this.colorsBuffer = new GLVertexBuffer(
        'a_color',
        new Float32Array(colors),
        dimension
      )
    }

    if(this.indices) {
      this.indicesBuffer = new GLIndexBuffer(
        new Uint16Array(this.indices),
        dimension
      )
    }


    if(this.texCoord) {
      this.texturesBuffer = new GLVertexBuffer(
        'a_texcoord',
        new Float32Array(texCoord),
        2
      )

    }
  }

  draw(){
    const gl = this.gl
    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LEQUAL)

    this.vertexBuffer.associate()
    this.colorsBuffer && this.colorsBuffer.associate()
    this.indicesBuffer && this.indicesBuffer.associate()
    this.texCoord && this.texturesBuffer.associate()

    if(this.indicesBuffer) {
      gl.drawElements(
        gl.TRIANGLES, 
        this.indices.length,
        gl.UNSIGNED_SHORT,
        0
      )
    } else {

      gl.drawArrays(
        gl.TRIANGLES,
        0,
        this.vertices.length / this.dimension
      )
    }
  }

}