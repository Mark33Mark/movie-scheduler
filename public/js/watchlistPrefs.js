
  const notice_me = document.getElementById("notify-me");
  const notice_checkbox = document.getElementById("notify");
  const notice_label = document.getElementById("notice-period-label");
  const notice_period = document.getElementById("notice-period");
  const release_label = document.getElementById("release-label");


  setUpForm = () => {
  if(notice_me.innerText === "Notification preference: Don't Notify"){
    notice_checkbox.checked = false;
    notice_label.style.display='none';
    notice_period.style.display='none';
    release_label.style.display='none';
  } else {
    notice_checkbox.checked = true;
    notice_label.style.display='inline';
    notice_period.style.display='inline';
    release_label.style.display='inline';
  }
};


checkBoxChange = () =>{
    
  if(notice_checkbox.checked){
    notice_label.style.display='inline';
    notice_period.style.display='inline';
    release_label.style.display='inline';
    
  } else {

    notice_label.style.display='none';
    notice_period.style.display='none';
    release_label.style.display='none';
  }
};

                                            
const updateFormHandler = async (event) => {
  event.preventDefault();

  const noticePeriod = document.querySelector('#notice-period').value.trim();

  // get the post id from the url
  const path = window.location.pathname;
  const id = path.slice(path.lastIndexOf("/")+1);
      

  if (id&&noticePeriod) {

        const response = await fetch( `/api/post/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ id, title, post }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert(`Post id: ${id} has now been updated.`);
          document.location.replace('/dashboard');

        } else {
          alert('Failed to update the post.');
        }
    }
};


const deleteButtonHandler = async (event) => {
  
  event.preventDefault();
  
 // get the post id from the url
  const path = window.location.pathname;
  const id = path.slice(path.lastIndexOf("/")+1);

  const response = await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    alert(`Post id: ${id} has now been deleted.`);
    document.location.replace('/dashboard');
  } else {
    alert(`Oops, there was a problem deleting post id: ${id}`);
  }
};


document
  .querySelector('#notify-me')
  .addEventListener('submit', updateFormHandler);

  document
  .querySelector('#remove-watching')
  .addEventListener('click', deleteButtonHandler);



  setUpForm();