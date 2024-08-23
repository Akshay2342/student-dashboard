import  Card  from './Card'
import './Module.css'

export function Module() {

    function myFunction() {
        document.getElementById("myDropdownn").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdownn-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    return (
        <div>
            <div class="dropdownn">
                <button onClick={myFunction} class="dropbtn">Modules <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></button>
                <div id="myDropdownn" class="dropdownn-content" >
                    <div>
                        <a href="#"> <Card title={'Academics'}/> </a>
                        <a href="#"> <Card title={'Programme And Curriculum'}/> </a>
                        <a href="#"> <Card title={'Mess Management'}/> </a>
                        <a href="#"> <Card title={`Visitor's Hostel`}/> </a>
                        <a href="#"> <Card title={'Healthcare Center'}/> </a>
                        <a href="#"> <Card title={'Scholarship Portal'}/> </a>
                    </div>
                    <div>
                        <a href="#"> <Card title={'Complaint System'}/> </a>
                        <a href="#"> <Card title={'Placement Cell'}/> </a>
                        <a href="#"> <Card title={'Department Portal'}/> </a>
                        <a href="#"> <Card title={'Gymkhana'}/> </a>
                        <a href="#"> <Card title={'Hostel Management'}/> </a>
                        <a href="#"> <Card title={'Other Academic Procedure'}/> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}