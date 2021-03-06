var React = require('react');
var {Thumbnail, ControlLabel, Button, ButtonGroup, FormControl, Checkbox, Modal, Image, Popover} = require('react-bootstrap');
var intl = require('./translate.js');

var StoredListEditor = React.createClass({
    render: function() {
        var locale = this.props.locale
        var combinations = this.props.storedList.combinations
        var armlist = this.props.storedList.armlist
        var removeOneStoredList = this.props.removeOneStoredList
        return (
            <Modal className="hpChartTutotial" show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{intl.translate("保存済みの編成", locale)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>No.</th>
                                {(armlist.length != 0) ? (armlist[0].map(function(arm, ind){
                                    if(arm.name != "") {
                                        return (<th key={ind}>{arm.name}</th>);
                                    } else {
                                        return (<th key={ind}>{intl.translate("武器", locale)}{ind}</th>);
                                    }
                                })) : ""}
                                <th>{intl.translate("操作", locale)}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {combinations.map(function(v, ind){
                                return (
                                    <tr key={ind}>
                                        <td>{ind}</td>
                                        {v.map(function(num, ind2){
                                            return (<td key={ind2}>{num}{intl.translate("本", locale)}</td>)
                                        })}
                                        <td><Button id={ind} onClick={removeOneStoredList} bsStyle="primary">{intl.translate("削除", locale)}</Button></td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        )
    },
});

var ControlAutoUpdate = React.createClass({
    render: function() {
        var locale = this.props.locale;
        var gstyle = (this.props.mobile) ? {"width": "100%"} : {}
        var style = (this.props.mobile) ? {"width": "50%"} : {}
        if(this.props.autoupdate) {
            return (
                <ButtonGroup style={gstyle} >
                <Button bsStyle="primary" style={style} onClick={this.props.forceResultUpdate}>{intl.translate("結果を更新", locale)}</Button>
                <Button bsStyle="danger" style={style} onClick={this.props.switchAutoUpdate} >{intl.translate("自動更新: OFF", locale)}</Button>
                </ButtonGroup>
            )
        } else {
            return (
                <ButtonGroup style={gstyle}>
                <Button bsStyle="primary" style={style} disabled onClick={this.props.forceResultUpdate}>{intl.translate("結果を更新", locale)}</Button>
                <Button bsStyle="primary" style={style} onClick={this.props.switchAutoUpdate} >{intl.translate("自動更新: ON", locale)}</Button>
                </ButtonGroup>)
        }
    },
});

module.exports.StoredListEditor = StoredListEditor;
module.exports.ControlAutoUpdate = ControlAutoUpdate
