import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

class OpenSource extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <h2>Open source contribution</h2>

                <React.Fragment>
                    <div className="opensource__content">
                        {siteConfig.npmPackages.map((pkg) => {
                            return (
                                <div className="opensource_packages">
                                    <a className='opensource__package-link' href={pkg.link} target="_blank">
                                        <strong>{pkg.name}</strong>
                                    </a>
                                    <div>{pkg.description}</div>
                                </div>
                            )
                        })

                        }
                        <hr />
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default styled(OpenSource)`
  position: relative;
  .opensource__content {
    margin-bottom: 40px;
  }

  .opensource_packages {
    position: relative;
  }

  .opensource__package-link {
    text-decoration: none;
    color: #25303B;
  }

  hr {
    margin-top: 16px;
  }

`
