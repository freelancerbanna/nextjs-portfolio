export const fadeInUp={
  initial:{
    opacity:0,
    y:60
  },
  animate:{
    opacity:1,
    y:0,
  }
}
export const stagger={
  initial:{
  },
  animate:{
    transition:{
      staggerChildren:0.1
    }
  }
}
export const routeAnimation={
  initial:{
    opactiy:0,
  },
  animate:{
    opacity:1,
    transition:{
      duration:0.2,
    }
  }
}