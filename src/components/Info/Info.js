import React from 'react'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'
import './Info.css'

const Info = () => {
    return(
        <div className="infoContainer">
            <Collapsible accordion popout>
              <CollapsibleItem
                  className="infoPopOuts"
                  expanded={false}
                  header="Email"
                  icon={<Icon>email</Icon>}
                  node="div"
              >
                  amandacerjak@gmail.com
              </CollapsibleItem>
              <CollapsibleItem
                  className="infoPopOuts"
                  expanded={false}
                  header="Phone"
                  icon={<Icon>local_phone</Icon>}
                  node="div"
              >
                  (714)-402-9226
              </CollapsibleItem>
              <CollapsibleItem
                  className="infoPopOuts"
                  expanded={false}
                  header="Current Location"
                  icon={<Icon>place</Icon>}
                  node="div"
              >
                  Huntington Beach, CA
              </CollapsibleItem>
              <CollapsibleItem
                  className="infoPopOuts"
                  expanded={false}
                  header="Resume"
                  icon={<Icon>folder_shared</Icon>}
                  node="div"
              >
                  <a className="projectImg" href="https://docs.google.com/document/d/17E3vYTIHt0EV3-aXD-GbuKbc2qeuofo6LDv6-uX_vy0/edit?usp=sharing">Link to GoogleDoc</a>
              </CollapsibleItem>
            </Collapsible>
        </div>
    )
}

export default Info