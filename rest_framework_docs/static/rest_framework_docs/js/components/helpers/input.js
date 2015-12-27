var React = require('react');

var Input = React.createClass({

  handleChange: function (value) {
    this.props.onChange(value);
  },

  render: function () {
    return (
      <div className="form-group">
        <label
          htmlFor={this.props.name}
          className="col-sm-4 control-label">
            {this.props.name}
        </label>
        <div className="col-sm-8">
          <input
            type={this.props.type}
            className="form-control input-sm"
            id={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            value={this.props.value}
            required={this.props.required} />
        </div>
      </div>
    );
  }
});

module.exports = Input;