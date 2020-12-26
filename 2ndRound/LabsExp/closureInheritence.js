function wolf(name) {
  const howl = () => {
    console.log(name + ': awoooooo')
  }
  return {
    howl: howl
  }
}

function dog(name) {
  const woof = () => {
    console.log(name + ': wooof')
  }
  return {
    ...wolf(name),
    woof: woof
  } 
}

const rufus = dog('rufus')
rufus.woof()
rufus.howl()