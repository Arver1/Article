import React, { PureComponent} from 'react';

class PopUp extends PureComponent {
  render() {
    return (
      <div className = "PopUp">
        <div className = "PopUp__wrapper">
          <h2>Ваш комментарий добавлен</h2>
        </div>
      </div>
    )
  }
}

export default PopUp;
