import styles from './css/Profile.module.css'

function Profile() {
  return <> 
      
      <h2>Profile Component</h2>

      <div>
         <img  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <h3>Ubaid Naeem</h3>

          <p className={styles.prof}>Software Engineer</p>
          <p>Location: Lahore, Pakistan</p>
          <button className={styles.button}>Follow</button>
      </div>
  </>;
}

export default Profile;
