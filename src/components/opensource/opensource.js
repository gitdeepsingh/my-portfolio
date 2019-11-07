import React from 'react'
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint =
    `https://www.npmjs.com/settings/${siteConfig.npmUsername}/packages`

class OpenSource extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            packages: [],
            status: 'loading'
        }
    }
    async componentDidMount() {
        const packages = await jsonFetch(endpoint);
        console.log('pakgs', packages)
        // if (packages.json && repos.json.length) {
        //   this.setState({ repos: repos.json, status: 'ready' })
        // }
    }

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
