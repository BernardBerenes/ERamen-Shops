var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);


function validate() {
    form = document.getElementById('contact-us-form')
    full_name = document.getElementById('full-name')
    email = document.getElementById('email-address')
    phone_number = document.getElementById('phone-number')
    ramen = document.getElementById('ramen')
    dry_ramen = document.getElementById('dry-ramen')
    newsletter = document.getElementById('newsletter')

    error_name = document.getElementById('full-name-error')
    error_email = document.getElementById('email-error')
    error_phone = document.getElementById('phone-number-error')
    error_preferences = document.getElementById('preferences-error')
    error_newsletter = document.getElementById('error-newsletter')

    if(full_name.value != ""){
        error_name.innerHTML = ''
    }
    if(email.value != ""){
        error_email.innerHTML = ''
    }
    if(phone_number.value != ""){
        error_phone.innerHTML = ''
    }
    if(ramen.checked || dry_ramen.checked){
        error_preferences.innerHTML = ''
    }
    if(newsletter.checked){
        error_newsletter.innerHTML = ''
    }

    if(full_name.value == ''){
        error_name.innerHTML = 'Name is required'
        return false
    } else if(full_name.value.length < 3){
        error_name.innerHTML = 'Name must more than 3 characters'
        return false
    } else if(!validate_email(email.value)){
        return false
    } else if(phone_number.value == ''){
        error_phone.innerHTML = 'Phone number is required'
        return false
    } else if(isNaN(phone_number.value)){
        error_phone.innerHTML = 'Phone number must be numeric'
        return false
    } else if(phone_number.value.length < 12){
        error_phone.innerHTML = 'Phone number must at least 12 characters'
        return false
    } else if(phone_number.value.length > 14){
        error_phone.innerHTML = 'Phone number cannot be above 14 characters'
        return false
    } else if(!ramen.checked && !dry_ramen.checked){
        error_preferences.innerHTML = 'Preferences is required'
        return false
    } else if(!newsletter.checked){
        error_newsletter.innerHTML = 'You must agree to receive newsletter from ERamen'
        return false
    }

    form.submit()
}

function validate_email(email) {
    
    let count = 0
    let dot = 0

    if(email == ''){
        error_email.innerHTML = 'Email is required'
        return false
    } else{
        for (let i = 0; i < email.length; i++) {
            if(email[i] == '@'){
                count++
            } else if(email[i] == '.'){
                dot++
            }
            
            if(count > 1){
                error_email.innerHTML = '@ must be one only'
                return false
            }  
        }

        if(count == 0){
            error_email.innerHTML = 'Email must contain @'
            return false
        } else if(dot == 0){
            error_email.innerHTML = 'There must be at least one dot (.)'
            return false
        } else if(email.split('@')[0].length == 0){
            error_email.innerHTML = 'There must be at least one character in front @'
            return false
        } else if(email.split('@')[1][0] == '.' || email.split('@')[1].length == 0){
            error_email.innerHTML = 'There must be a email domain'
            return false
        } 
    }

    return true
}

function show_ham() {
    var menu = document.getElementById('responsive-menu')
    if(menu.style.display === 'flex'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'flex'
    }
}