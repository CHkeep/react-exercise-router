import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        Company:ThoughtWorks Local
        <br/>
        Location Xi'an
          <div>
            For more information,please
            <br/>
            view pur <Link  to='/'>website</Link>
        </div>
      </div>
      
    );
  };
}

export default About;