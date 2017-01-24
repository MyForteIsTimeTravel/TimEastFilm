(function(){
    let portfolioButton  = document.getElementById("portfolio")
    let portfolioSubmenu = document.getElementById("portfolioSubmenu")
    let portfolioShown   = false
        
    let contactButton  = document.getElementById("contact")
    let contactSubmenu = document.getElementById("contactSubmenu")
    let contactShown   = false
    
    // show portfolio submenu
    portfolioButton.addEventListener("click", function(e) {
        if (portfolioShown) {
            portfolioSubmenu.style.display = "none"
        }
        
        else {
            portfolioSubmenu.style.display = "block"      
        }
        
        portfolioShown = !portfolioShown
    })
    
    // hide portfolio submenu
    
    // show contact submenu
    contactButton.addEventListener("click", function (e) {
        if (contactShown) {
            contactSubmenu.style.display = "none"
        }
        
        else {
            contactSubmenu.style.display = "block"   
        }
        
        contactShown = !contactShown
    })
    
    // hide contact submenu
    
}());