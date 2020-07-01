import React from 'react'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'
import './Info.css'

const Info = () => {
    return(
        <>
        <div className="container">
            <Collapsible accordion>
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
                  <a className="projectImg" href="https://docs.google.com/document/d/e/2PACX-1vQNY8r4pPXWpt4AptfpiCY7uDE71fMO9W8KZZiDx26_Wf7OpTAyTeMA30GLm2D3FA/pub">Link to GoogleDoc</a>
              </CollapsibleItem>
            </Collapsible>
        </div>
        </>
    )
}

export default Info