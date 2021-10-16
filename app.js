 const page=()=>{
        const main=document.querySelector('.main');
        const edunav=document.querySelector('.edunav1');
        const addnav=document.querySelector('.addnav2');
        const contnav3=document.querySelector('.contnav3');
        const edupage=document.querySelector('.edupage');
        const addpage= document.querySelector('.addpage');
        const contpage= document.querySelector('.contpage');
         const servnav = document.querySelector('.servnav');
         const servpage =  document.querySelector('.services');
          const homenav = document.querySelector('.homenav');
          const mainfade =  document.querySelector('.main');
        const close1 = document.querySelector('.close1');
        const close2 = document.querySelector('.close2');
        const close3 = document.querySelector('.close3');

        homenav.addEventListener('click',()=>{
         edupage.classList.remove('pageshow');
          addpage.classList.remove('pageshow');
        contpage.classList.remove('pageshow');
        main.classList.remove('mainscroll');
        });

        servnav.addEventListener('click',()=>{
           edupage.classList.remove('pageshow');
          addpage.classList.remove('pageshow');
        contpage.classList.remove('pageshow');
        });

      edunav.addEventListener('click',()=>{
        edupage.classList.add('pageshow');
        addpage.classList.remove('pageshow');
        contpage.classList.remove('pageshow');
        main.classList.add('mainscroll');
        // mainfade2.classList.toggle('fadedisplay');
      });

      addnav.addEventListener('click',()=>{
        edupage.classList.remove('pageshow');
        addpage.classList.add('pageshow');
        contpage.classList.remove('pageshow');
         main.classList.add('mainscroll');
         // mainfade2.classList.toggle('fadedisplay');
      });

      contnav3.addEventListener('click',()=>{
        edupage.classList.remove('pageshow');
        addpage.classList.remove('pageshow');
        contpage.classList.add('pageshow');
         main.classList.add('mainscroll');
      });

      close1.addEventListener('click',()=>{
         edupage.classList.remove('pageshow');
        //   addpage.classList.remove('pageshow');
        // contpage.classList.remove('pageshow');
        main.classList.remove('mainscroll');
      });

       close2.addEventListener('click',()=>{
         
          addpage.classList.remove('pageshow');
         main.classList.remove('mainscroll');
      });

        close3.addEventListener('click',()=>{
        
        contpage.classList.remove('pageshow');
        main.classList.remove('mainscroll');
      });

      // contnav.addEventListener('click',()=>{
      //   edupage.classList.remove('pageshow');
      //   addpage.classList.remove('pageshow');
      //   // contpage.classList.toggle('pageshow');
      //   // servpage.classList.remove('servshow');
      //   // mainfade.classList.add('mainfade2');
      //    // mainfade2.classList.toggle('fadedisplay');
      // });
   

     }

     page();

