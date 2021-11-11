
//Main Gallery Function 
function Gallery(gallery) {
    
    // Error Handler
    if(!gallery) {
        throw new Error("No Gallery Found!")
    }

    this.gallery = gallery;
    // select the elements we need
    this.images = Array.from(gallery.querySelectorAll('img'))
    this.modal = document.querySelector('.modal')
    this.prevButton = this.modal.querySelector('.prev')
    this.nextButton = this.modal.querySelector('.next')
    console.log(this.images)

    //bind our methods to the instance when we need them 
    this.showNextImage = this.showNextImage.bind(this)
    this.showPrevImage = this.showPrevImage.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    
    
    //These are the event listeners
    this.images.forEach(image => image.addEventListener('click', e => this.showImage(e.currentTarget)))
    
    //loop over each image
    this.images.forEach(image => {
        //attach an event listener for each image
        image.addEventListener('keyup', e=> {
            // when that is keyup'd, check if it was enter 
            if(e.key === 'Enter') {
                //if it was, show that image
                this.showImage(e.currentTarget)
            }
        })
    })
    
    this.modal.addEventListener('click', this.handleClickOutside) // close modal when users clicks outside modal    
}

    // Open Modal
    Gallery.prototype.openModal = function() {
        console.info('Opening Modal...')
        // First check if the modal is already open 
        if(this.modal.matches('.open')) {
            console.log('Modal is already open')
            return;
        }
        this.modal.classList.add('open');
        
        //Event Listeners to be bound when we open the modal:
        // When the modal opens these event listeners will be add
        window.addEventListener('keyup', this.handleKeyUp)
        this.nextButton.addEventListener('click', this.showNextImage)
        this.prevButton.addEventListener('click', this.showPrevImage)
    }
    
    // Close Modal
    Gallery.prototype.closeModal = function() {
        this.modal.classList.remove('open')
        
        //removes event listener on elements when the modal closes
        window.removeEventListener('keyup', this.handleKeyUp)
        this.nextButton.removeEventListener('click', this.showNextImage)
        this.prevButton.removeEventListener('click', this.showPrevImage)
    }
    
    // Handle Click Outside
    Gallery.prototype.handleClickOutside = function(e){
        if(e.target === e.currentTarget){
            this.closeModal();
        }
    }
    
    // HandleKeyUp
    Gallery.prototype.handleKeyUp = function(e) {
        if(e.key === 'Escape') return this.closeModal()
        if(e.key === 'ArrowRight') return this.showNextImage()
        if(e.key === 'ArrowLeft') return this.showPrevImage() 
    }
    
    // Show Next Image
    Gallery.prototype.showNextImage = function(){
        console.log('SHOWING NEXT IMG')
        this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild)
    }
    
    // Show Prev Image
    Gallery.prototype.showPrevImage = function(){
        this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild)
    }
    
    // Show Image
    Gallery.prototype.showImage = function(el) {
        if(!el) {
            console.log('no image to show')
            return
        }
        
        //update the modal with this info
        console.log(el)
        this.modal.querySelector('img').src = el.src;
        this.modal.querySelector('h2').textContent = el.title;
        this.modal.querySelector('figure p').textContent = el.dataset.description;
        this.currentImage = el;
        this.openModal()
    }

// Use it on the Page 
//Contain appropriate elements in variables
const gallery1 = new Gallery(document.querySelector('.gallery1'))
const gallery2 = new Gallery(document.querySelector('.gallery2'))
