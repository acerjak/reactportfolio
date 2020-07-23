import React from 'react'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'
import './Info.css'

const Info = () => {
    return(
        <div className="infoContainer">
            <Collapsible accordion popout>
              <CollapsibleItem
                  expanded={false}
                  header="Email"
                  icon={<Icon>email</Icon>}
                  node="div"
              >
                  amandacerjak@gmail.com
              </CollapsibleItem>
              <CollapsibleItem
                  expanded={false}
                  header="Phone"
                  icon={<Icon>local_phone</Icon>}
                  node="div"
              >
                  (714)-402-9226
              </CollapsibleItem>
              <CollapsibleItem
                  expanded={false}
                  header="Current Location"
                  icon={<Icon>place</Icon>}
                  node="div"
              >
                  Huntington Beach, CA
              </CollapsibleItem>
              <CollapsibleItem
                  expanded={false}
                  header="Resume"
                  icon={<Icon>folder_shared</Icon>}
                  node="div"
              >
                  <a className="projectImg" href="https://docs.google.com/document/d/1NYdyUhOMOwuAHU-8ARjWd_jx-BHvu5IEN8JKWPDZAIM/edit?usp=sharing">Link to GoogleDoc</a>
              </CollapsibleItem>
            </Collapsible>
        </div>
    )
}

export default Info