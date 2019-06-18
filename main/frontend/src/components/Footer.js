import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom bg-light">
            <div className="container">
                Copyright &copy; &nbsp;
                <a href="https://github.com/TalatCikikci/release-buddy">Release Buddy GitHub</a>
                &nbsp; 2019. All Rights Reserved
            </div>
      </footer>
    );
  }
}

export default Footer;