
//Main Gallery Function 
function Gallery(gallery) {
    
    // Error Handler
    if(!gallery) {
        throw new Error("No Gallery Found!")
    }
    
    // select the elements we need
    const images = Array.from(gallery.querySelectorAll('img'))
    const modal = document.querySelector('.modal')
    const prevButton = modal.querySelector('.prev')
    const nextButton = modal.querySelector('.next')
    let currentImage;
    console.log(images)
    
    // Open Modal
    function openModal() {
        console.info('Opening Modal...')
        // First check if the modal is already open 
        if(modal.matches('.open')) {
            console.log('Modal is already open')
            return;
        }
        modal.classList.add('open');
        
        //Event Listeners to be bound when we open the modal:
        // When the modal opens these event listeners will be add
        window.addEventListener('keyup', handleKeyUp)
        nextButton.addEventListener('click', showNextImage)
        prevButton.addEventListener('click', showPrevImage)
    }
    
    // Close Modal
    function closeModal() {
        modal.classList.remove('open')
        
        //removes event listener on elements when the modal closes
        window.removeEventListener('keyup', handleKeyUp)
        nextButton.removeEventListener('click', showNextImage)
        prevButton.removeEventListener('click', showPrevImage)
    }
    
    // Handle Click Outside
    function handleClickOutside(e){
        if(e.target === e.currentTarget){
            closeModal();
        }
    }
    
    // HandleKeyUp
    function handleKeyUp(e) {
        if(e.key === 'Escape') closeModal()
        if(e.key === 'ArrowRight') showNextImage()
        if(e.key === 'ArrowLeft') showPrevImage() 
    }
    
    // Show Next Image
    function showNextImage(){
        showImage(currentImage.nextElementSibling || gallery.firstElementChild)
    }
    
    // Show Prev Image
    function showPrevImage(){
        showImage(currentImage.previousElementSibling || gallery.lastElementChild)
    }
    
    // Show Image
    function showImage(el) {
        if(!el) {
            console.log('no image to show')
            return
        }
        
        //update the modal with this info
        console.log(el)
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal()
    }
    
    //Loop over items to add event listener
    images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)))
    
    //loop over items to add key event listener
    images.forEach(image => {
        //attach an event listener for each image
        image.addEventListener('keyup', e=> {
            // when that is keyup'd, check if it was enter 
            if(e.key === 'Enter') {
                //if it was, show that image
                showImage(e.currentTarget)
            }
        })
    })
    
    modal.addEventListener('click', handleClickOutside) // close modal when users clicks outside modal    
}

// Use it on the Page 
//Contain appropriate elements in variables
const gallery1 = Gallery(document.querySelector('.gallery1'))
const gallery2 = Gallery(document.querySelector('.gallery2'))
