// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60){
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight){
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0){
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY){
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow{

  constructor(){
     this.screenSize = {
       width: 800,
       height: 600
     };
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize){
    if(newSize.width > 0){
      if(newSize.width > this.screenSize.width){
        this.size.width = this.screenSize.width - this.position.x;
      }else{
        this.size.width = newSize.width;
      }
    }else{
      this.size.width = 1;
    }

    if(newSize.height > 0){
      if(newSize.height > this.screenSize.height){
        this.size.height = this.screenSize.height - this.position.y;
      }else{
        this.size.height = newSize.height;
      }
    }else{
      this.size.height = 1;
    }
    
  }

  move(newPosition){
    if(newPosition.x >= 0){
      const combineSize = newPosition.x + this.size.width;
      if(combineSize > this.screenSize.width){
        const reduceSize = combineSize - this.screenSize.width;
        this.position.x = newPosition.x - reduceSize;
      }else{
        this.position.x = newPosition.x;
      }
    }else{
      this.position.x = 0;
    }

    if(newPosition.y >= 0){
      const combineSize = newPosition.y + this.size.height;
      if(combineSize > this.screenSize.height){
        const reduceSize = combineSize - this.screenSize.height;
        this.position.y = newPosition.y - reduceSize;
      }else{
        this.position.y = newPosition.y;
      }
    }else{
      this.position.y = 0;
    }
    
  }
  
}

export function changeWindow(programWindow){
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;

  return programWindow;
  
}












