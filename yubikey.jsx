import Desktop from './lib/Desktop/index.jsx';
import Error from './lib/Error/index.jsx';
import parse from './lib/parse.jsx';

export const refreshFrequency = 500

export const command = './powerbar/status-yubikey.sh'


let bg = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    fontFamily: 'Roboto Mono For Powerline',
    overflow: 'hidden',
    bottom: '0px',
    left: '0px',
}

export const render = ({output}) => {
  console.log(`yubikey bar output: ${output}`);
  const data = parse(output);
  if (typeof data === 'undefined') {
    return (
      <div style={bg}>
        <Error msg="" side="left"/>
      </div>
    )
  }
  if (typeof data.error !== 'undefined') {
    return (
      <div style={bg}>
        <Error msg={`Error: ${data.error}`} side="left"/>
      </div>
    )
  }
  const {cardstatus} = data;
  let background = '#eee';
  if (cardstatus == 0) {
    return null;
  }

  if (cardstatus !== 0) {
    background = 'rgba(221, 170, 34, 1)';
  }
  if (cardstatus === 2) {
    background = 'rgba(255, 68, 68, 1)';
  }

  const style = {
    zindex: -1,
    background,
    width: '100%',
    height: '98%',
    position: 'fixed',
    display: 'flex',
    fontFamily: 'Roboto Mono For Powerline',
    overflow: 'hidden',
    bottom: '20px',
    left: '0px',
  }

  return (
    <div>
      <div style={style}>
      </div>
    </div>
  )
}

export default null
