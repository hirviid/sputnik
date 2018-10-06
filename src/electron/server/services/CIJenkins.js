import Jenkins from 'jenkins';
// import url from 'url'
import CIInterface from './CIInterface';

class CIJenkins extends CIInterface {
  constructor(configuration) {
    super();
    const jenkinsUrl = new URL(configuration.url);
    jenkinsUrl.username = configuration.username;
    jenkinsUrl.password = configuration.password;
    this.ci = new Jenkins({ baseUrl: jenkinsUrl.href });
  }

  getInfo(cb) {
    this.ci.info(function(err, data) {
      if (err) throw err;

      console.log('info', data);
      cb(data);
    });
  }
}

export default CIJenkins;
