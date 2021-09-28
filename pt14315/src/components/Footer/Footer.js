import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <div>
            {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
    )
}

Footer.propTypes = {

}

export default Footer

