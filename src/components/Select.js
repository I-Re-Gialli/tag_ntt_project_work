import React from "react";

class Select extends React.Component {
  render() {
    const { stores } = this.props;
    const options = stores.map(store => (
      <option key={store.storeCode} value={store.storeCode}>
        {store.storeName}
      </option>
    ));
    return (
      <div className="select">
        <select>{options}</select>
      </div>
    );
  }
}

export default Select;
