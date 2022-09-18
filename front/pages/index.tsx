import Script from 'next/script'
import React, { useEffect } from 'react'

export default function index() {
  return (
    <div>
      <script dangerouslySetInnerHTML={{__html: `
       function checkLoginState() {
        window.FB.getLoginStatus(function(response) {
          console.log(response);
        });
      }
      `}}></script>
      <div dangerouslySetInnerHTML={{__html:`
        <fb:login-button 
        scope="public_profile,email,pages_manage_metadata,pages_show_list,pages_read_user_content,pages_read_engagement"
        onlogin="checkLoginState();">
        </fb:login-button>
      `}}></div>
    </div>
  )
}
