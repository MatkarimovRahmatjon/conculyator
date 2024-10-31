let ekran = document.getElementById('hisobchi')
let qwe = ``
  
    
    function raqam(num) {
        ekran.value += num
    }
    
    function hisobla() {
        if(ekran.value !== qwe){
            ekran.value = eval(ekran.value)
        }else{
            ekran.value = qwe
        }

    }

function tazalash() {
    ekran.value = ``
}

