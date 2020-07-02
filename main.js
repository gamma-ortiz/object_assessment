// let coin = {
//     state: 0,
//     flip: function() {
//         /* 1. Randomly set your coin object's "state" property to be either 
//            0 or 1: use "this.state" to access the "state" property on this object.*/
//     },
//     toString: function() {
//         /* 2. Return the string "Heads" or "Tails", depending on whether
//            "this.state" is 0 or 1. */
//     },
//     toHTML: function() {
//         let image = document.createElement('img');
//         /* 3. Set the properties of this image element to show either face-up
//            or face-down, depending on whether this.state is 0 or 1.*/
//         return image;
//     }
// };


let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           return this.state = Math.round(Math.random() * 1)


    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
            if(this.state == 0) {
                return "lemur-faceup"
            } else {
                return "lemur-facedown"
            }

    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

           image.src = this.state === 0 ?
           "images\lemur-faceup.jpg" :
           "images\lemur-facedown.jpg" 

           image.style.height ="200px"
           image.style.width = "200px"
        return image;
    }
}
    function flip20lemurs(){
        for(let i = 0; i < 20; i++) {
            let element = document.createElement("p")
            element.style.margin = "10px"
            coin.flip()
            element.append(coin.toString())
            document.body.append(element)
        }
    }
    function display20lemurs() {
        for(let i = 0; i < 20; i++) {
            coin.flip()
            document.body.append(coin.toHTML())
        }
    }