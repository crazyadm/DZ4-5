const chesrow =['A','B','C','D','E','F','G','H']
let colorback="black"
let colortxt="white"

for (let i=0; i<8; i++) {
    const row = document.createElement('div')
    row.style.display="flex"
    document.body.appendChild(row)
    for (let j=1; j<=8; j++){
        const cell=document.createElement('div')
        cell.style.width="30px"
        cell.style.height="30px"
        cell.style.border="1px solid black"
        cell.style.fontFamily="Arial"
        cell.innerHTML="<p>" + chesrow[i] +j+"</p>"
         if (colorback==="black") {
             cell.style.background=colorback
             cell.style.color=colortxt
             colorback="white"
             colortxt="black"

         } else {
             cell.style.background=colorback
             cell.style.color=colortxt
             colorback="black"
             colortxt="white"
         }

         if (j===8) {
             if (colorback==="black") {
                    colorback="white"
                    colortxt="black"
            } else {
                    colorback="black"
                    colortxt="white"
             }
 
         } 
         
        row.appendChild(cell)
        
    }
}