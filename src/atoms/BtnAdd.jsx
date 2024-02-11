import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BtnAdd({ addAct, messages }) {

  return (
    <div className="talk-input">
      <button style={{ borderRadius: '12px' }} type="submit" onClick={() => addAct()}>Tambah {messages}</button>
    </div>
  );
}

BtnAdd.propTypes = {
  addTalk: PropTypes.func.isRequired,
};

export default BtnAdd;
