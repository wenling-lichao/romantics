import { Mesh } from "../model/Mesh"

export const d3_cube = (useColor = true, useTexture = false, useNorms = false) => {

  
  const texCoords = [
    0,0,0,1,.25,1,.25,0,
    .25,0,.5,0,.5,1,.5,0,
    .75,0,.75,1,0,.5,.5,0,
    0,0,.75,0,.75,1,0,1,
    0,0,0,1,1,1,1,0,
    0,0,0,1,1,1,1,0,
  ]
  const vertices = [
    // 左
    -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1,
    // 前
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
    // 右边
    1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1,

    // 后 
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,

    -1, -1, -1, -1, -1, 1, 1, -1, 1, 1, -1, -1,
    -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1,
  ]
  const indices = [
    0,1,2,0,2,3,
    4,5,6,4,6,7,
    8,9,10, 8,10,11, 
    12,13,14, 12,14,15,
    16, 17, 18, 16, 18, 19, 
    20, 21, 22, 20, 22, 23 
  ]

  const norms = [
    // 左
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,

    //前
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    // 右
    -1, 0, 0, 
    -1, 0, 0, 
    -1, 0, 0, 
    -1, 0, 0, 
    -1, 0, 0, 
    -1, 0, 0, 
    
    // 后
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    // 上
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    // 下
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
  ]
  
  const colors =  [
    .5,.3,.7, .5,.3,.7, .5,.3,.7, .5,.3,.7,
    .1,.1,.3, .1,.1,.3, .1,.1,.3, .1,.1,.3,
    0,.3,.3, 0,.3,.3, 0,.3,.3, 0,.3,.3,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,1,0, 1,1,0, 1,1,0, 1,1,0,
    0,1,0, 0,1,0, 0,1,0, 0,1,0
  ]



  // const texCoords = [
  //   0,0,0,2,2,2,2,0,
  //   0,0,2,0,2,2,0,2,
  //   0,0,0,2,2,2,2,0,
  //   0,0,0,2,2,2,2,0,
  //   0,0,0,2,2,2,2,0,
  //   0,0,0,2,2,2,2,0,
  // ]


  return new Mesh({ vertices, indices, 
    colors: useColor && colors, 
    norms : useNorms && norms,
    texCoords : useTexture && texCoords })
}