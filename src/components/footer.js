import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer footer" style={styles.footer}>
      <div className="footer-copyright text-center py-3 copyright" style={styles.copyright}>© 2021 Copyright:
        <span className="copyright-name ms-2" style={styles.copyrightName}>Adrian Tarza</span>
      </div>
    </footer>
  )
}

var styles = {

  footer: {
    backgroundColor:"#13151f",
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    overflow: "hidden",
    display: "block",
  },

  copyright: {
    color: "#909090"
  },
  copyrightName: {
    color: "#dedede"
  }
};

export default Footer;