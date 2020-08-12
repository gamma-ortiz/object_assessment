let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        return this.state = Math.round(Math.random() * 1)


    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "Heads"
        } else {
            return "Tails"
        }

    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        // image.src = this.state === 0 ?
        //     "images\lemur-faceup.jpg" :
        //     "images\lemur-facedown.jpg"
        if(this.state === 0){
            image.src = "./images/lemur-faceup.jpg"
        }else {
            image.src = "./images/lemur-facedown.jpg"
        }
        image.style.height = "150px"
        image.style.width = "150px"
        return image;
    }

}
function flip20lemurs() {
    for (let index = 0; index < 20; index += 1) {
        let potato = document.createElement("p")
        potato.style.margin = "10px"
        coin.flip()
        potato.append(coin.toString())
        document.body.append(potato)
    }

}
function display20lemurs() {
    for (let index = 0; index < 20; index += 1) {
        coin.flip()
        document.body.append(coin.toHTML())
    }

}
flip20lemurs()
display20lemurs()