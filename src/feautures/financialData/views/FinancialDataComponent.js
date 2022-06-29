const FinancialDataComponent = (props) => {
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
                    <label
                        htmlFor="company"
                        className="col-sm-3 col-form-label"
                    >
                        Cəmi Aktivlər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            id="active"
                            type="text"
                            className={'form-control'}
                            value={props.active}
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            id="active"
                            type="text"
                            className={'form-control'}
                            value="10000"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="segment"
                        className="col-sm-3 col-form-label"
                    >
                        Cəmi Kapital
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.capital}
                            type="text"
                            className={'form-control'}
                            id="capital"
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="10000"
                            type="text"
                            className={'form-control'}
                            id="capital"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="share" className="col-sm-3 col-form-label">
                        Cəmi Öhdəliklər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.liability}
                            type="text"
                            className={'form-control'}
                            id="liability"
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="10000"
                            type="text"
                            className={'form-control'}
                            id="liability"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="employee"
                        className="col-sm-3 col-form-label"
                    >
                        EBITDA (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.ebitda}
                            type="text"
                            className={'form-control'}
                            id="ebitda"
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="10000"
                            type="text"
                            className={'form-control'}
                            id="ebitda"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ceo" className="col-sm-3 col-form-label">
                        Xalis Mənfəət /(Zərər) (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.loss}
                            type="text"
                            className={'form-control'}
                            id="loss"
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="10000"
                            type="text"
                            className={'form-control'}
                            id="loss"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="industry"
                        className="col-sm-3 col-form-label"
                    >
                        Ödənilmiş mənfəət vergisi (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="incometax"
                            value={props.incomeTax}
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="incometax"
                            value="10000"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        Ödənilmiş əmlak vergisi (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="propertytax"
                            value={props.propertyTax}
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="propertytax"
                            value="10000"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        Bütün təsisçilərə ödənilən dividendlər (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="dividend1"
                            value={props.dividend1}
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="dividend1"
                            value="10000"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        SOCAR-a ödənilən dividendlər (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="dividend2"
                            value={props.dividend2}
                        />
                    </div>
                    <br/>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={'form-control'}
                            id="dividend2"
                            value="10000"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 button-right">
                        <button type="button" className="btn-save">
                            Approve
                        </button>
                        <button type="button" className="btn-reset">
                            Send back
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
};
export default FinancialDataComponent;
