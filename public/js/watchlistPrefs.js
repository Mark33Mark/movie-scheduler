
  const notify_me = document.getElementById("notify-me");
  const notice_checkbox = document.getElementById("notify");
  const notice_label = document.getElementById("notice-period-label");
  const notice_period = document.getElementById("notice-period");
  const release_label = document.getElementById("release-label");


  setUpForm = () => {
  if(notify_me.innerText === "Notification preference: Don't Notify"){
    // notice_checkbox.checked = false;
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

                                            
const updateFormHandler = async ( event ) => {

  let notification_period = "";

  // get the checkbox status
  let notified = notice_checkbox.checked;

  // get the user selected notification period
  if(notified===false){
    notification_period = null;
  } else {
    notification_period = notice_period.value.trim();
  }

  // get the post id from the url
  const path = window.location.pathname;
  const movie_id = path.slice(path.lastIndexOf("/")+1);

  console.log(movie_id, notified, notification_period);

        const response = await fetch( `/api/movie/${movie_id}`, {
          method: 'PUT',
          body: JSON.stringify({ movie_id, notification_period, notified }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(movie_id, notified.value, notification_period);
        window.location.reload(true);

        if (response.ok) {
          alert(`Your watchlist preference for Movie id: ${movie_id} has now been updated.`);
          // document.location.replace('/dashboard');

        } else {
          alert('Failed updating the movie watchlist preferences.');
        }

};


const deleteButtonHandler = async (event) => {
  
  event.preventDefault();
  
 // get the post id from the url
  const path = window.location.pathname;
  const id = path.slice(path.lastIndexOf("/")+1);

  console.log(id);

  const response = await fetch(`/api/movie/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    alert(`Movie id: ${id} is removed from your watchlist.`);
    document.location.replace('/dashboard');
  } else {
    alert(`Oops, there was a problem deleting movie id: ${id} from your watchlist`);
  }
};

  
document
  .querySelector('#remove-watching')
  .addEventListener('click', deleteButtonHandler);

// document
//   .querySelector('#preferences')
//   .addEventListener('submit', updateFormHandler);


  setUpForm();