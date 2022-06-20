import PropTypes from 'prop-types';
import Select from 'react-select';
const CompanyDetailsComponent = props => {
    var color, colorS, colorSh, colorEmp, colorC = false;
    if (props.companyName !== props.nameWarn){
        color = true;
    }
    if (props.companySegment !== props.segmentWarn){
        colorS = true;
    }
    if (props.companyShare !== props.shareWarn){
        colorSh = true;
    }
    if (props.companyNumberOfEmployees !== props.numberOfEmployeesWarn){
        colorEmp = true;
    }
    if (props.companyCEO !== props.CEOWarn){
        colorC = true;
    }
    console.log(props.companyName, "and", props.nameWarn, "and color is", color);
    console.log(props.companyShare, "and", props.shareWarn, "and color is", colorSh)
    return (
        <main className="content">
            <div className="content-header">
                <button className="content-header--button">
                    View history of changes
                    <i className="fa-solid fa-arrow-right-from-bracket content-header--icon"></i>
                </button>
            </div>


            <form className="content-form">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Şirkət</label>
                    <div className="col-sm-6">
                        <input
                            id="company"
                            type="text"
                            className={color ? 'form-control invalid margin-left' : 'form-control margin-left'}
                            value={props.companyName}
                            onChange={e => props.setCompanyName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                        Aid olduğu seqment
                    </label>
                    <div className="col-sm-6">
                        <input
                            id="segment"
                            type="text"
                            className={colorS ? 'form-control invalid margin-left' : 'form-control margin-left'}
                            value={props.companySegment}
                            onChange={e => props.setCompanySegment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Share</label>
                    <div className="col-sm-6">
                        <input
                            id="share"
                            type="number"
                            className={colorSh ? 'form-control invalid margin-left' : "form-control margin-left"}
                            value={props.companyShare}
                            onChange={e => props.setCompanyShare(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">İşçi sayı</label>
                    <div className="col-sm-6">
                        <input
                            id="employee"
                            type="number"
                            className={colorEmp ? 'form-control invalid margin-left' : "form-control margin-left"}
                            value={props.companyNumberOfEmployees}
                            onChange={e => props.setCompanyNumberOfEmployees(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Rəhbər</label>
                    <div className="col-sm-6">
                        <input
                            id="ceo"
                            type="text"
                            className={colorC ? 'form-control invalid margin-left' : "form-control margin-left"}
                            value={props.companyCEO}
                            onChange={e => props.setCompanyCEO(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                        Fəaliyyət sahəsi
                    </label>
                    <div className="col-sm-9 flex-wrap segment-row">
                        <div className="auto">
                            <span className="deleteicon">
                                <span
                                    className="input form-control"
                                    id="industry"
                                    contentEditable="true"
                                    role="textbox"
                                >
                                </span>
                                <span className="delete-span">x</span>
                            </span>
                        </div>
                        <button className="col-sm-1 add-button">
                            Add{' '}
                            <i
                                className="fa-solid fa-plus"
                                style={{ marginLeft: '5px' }}
                            ></i>
                        </button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                        Fəaliyyət göstərdiyi ölkələr
                    </label>
                    <div className="col-sm-6">
                        <Select
                            className="margin-left form-control form-control-select"
                            defaultValue={props.companyCountryOfOperation}
                            onChange={() => props.setCountryOfOperation()}
                            options={props.countries}
                            isMulti
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 button-right">
                        <button
                            type="button"
                            onClick={props.onSubmitForm}
                            className="btn-save"
                        >
                            Send
                        </button>
                        <button
                            type="button"
                            onClick={props.reset}
                            className="btn-reset"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
};

CompanyDetailsComponent.propTypes = {
    companyName: PropTypes.string,
    companySegment: PropTypes.string,
    companyShare: PropTypes.number,
    companyNumberOfEmployees: PropTypes.number,
    companyCEO: PropTypes.string,
    countryOfOperation: PropTypes.string,
};

export default CompanyDetailsComponent;
