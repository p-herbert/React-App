import React from 'react';

const Editor = ({ change, holder }) => (
  <textarea
    className="editor"
    onChange={e => change(e)}
    placeholder={holder}
  />
);

Editor.propTypes = {
  holder: React.PropTypes.string.isRequired,
  change: React.PropTypes.func.isRequired };

export default Editor;

