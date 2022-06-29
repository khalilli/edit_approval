import axios from 'axios';
import create from 'zustand';
import {devtools} from 'zustand/middleware';
import initiateWorkflow from '../feautures/api/initiateWorkflow';

const handleInitiateWorkflow = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    const args = {
        cid: key
    };
    await initiateWorkflow(args);
}
const handleGetCompanyDetails = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=116190&objAction=RunReport&key="+key);
        const data = response.data;
        data.pop();
        set({
            companyDetails: {
                name: data[0].CNAME,
                nameWarn: data[0].CNAME,
                segment: data[0].SERVICENAME !== '?' ? data[0].SERVICENAME : '',
                segmentWarn: data[0].SERVICENAME !== '?' ? data[0].SERVICENAME : '',
                share: data[0].CSHARE !== '?' ? data[0].CSHARE : '',
                shareWarn: data[0].CSHARE !== '?' ? data[0].CSHARE : '',
                numberOfEmployees: data[0].COUNTEMP !== '?' ? data[0].COUNTEMP : '',
                numberOfEmployeesWarn: data[0].COUNTEMP !== '?' ? data[0].COUNTEMP : '',
                ceo: data[0].NNAME !== '?' ? data[0].NNAME : '',
                ceoWarn: data[0].NNAME !== '?' ? data[0].NNAME : '',
                countryOfOperation: ''
            }
        })
    }
}
const handleGetDirectors = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=128822&objAction=RunReport&key="+key);
        let data = response.data;
        data.pop();
        data = data.map(x=>({dirname: x.DIREKTOR}));
        set({
            directorList: data,
        })
    }
}
const handleGetRepresentatives = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=127757&objAction=RunReport&key="+key);
        let data = response.data;
        data.pop();
        data = data.map(x=>({repname: x.UMUMIYIGINCAQ}));
        set({
            representativeList: data,
        })
    }
}
const handleGetFinancialData = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key"));
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=126689&objAction=RunReport&key="+key);
        const data = response.data;
        data.pop();
        set({
            financialData: {
                active: data[0].CEMIAKTIVLER,
                capital: data[0].CEMIKAPITAL,
                liability: data[0].CEMIOHDELIKLER,
                ebitda: data[0].EBITDA,
                loss: data[0].XALISMENFEET,
                incometax: data[0].MENFEETVERGI,
                propertytax: data[0].EMLAKVERGI,
                dividend1: data[0].BUTUNTESISCILERE,
                dividend2: data[0].SOCARA,
            }
        })
    }
}
const handleGetCompanyShares = async (set, get) => {
    let params = new URLSearchParams(window.location.search);
    let key = parseInt(params.get("key")); 
    if(!Number.isNaN(key)){
        const response = await axios.get("http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=128820&objAction=RunReport&key="+key);
        let data = response.data;
        data.pop();
        set({
            companyShares: data,
        })
    }
}

const store = (set, get) => ({
    companyDetails: {
        name: '',
        segment: '',
        share: 0,
        numberOfEmployees: 0,
        ceo: '',
        countryOfOperation: ''
    },
    directorList: [],
    representativeList: [],
    financialData: {
        active: '',
        capital: '',
        liability: '',
        ebitda: '',
        loss: '',
        incometax: '',
        propertytax: '',
        dividend1: '',
        dividend2: '',
    },
    companyShares: [],
    initWorkflow: () => handleInitiateWorkflow(set, get),
    getCompanyDetails: () => handleGetCompanyDetails(set, get),
    getDirectors: () => handleGetDirectors(set, get),
    getRepresentatives: () => handleGetRepresentatives(set, get),
    getFinancialData: () => handleGetFinancialData(set, get),
    getCompanyShares: () => handleGetCompanyShares(set, get)
})


const useStore = create(devtools(store));

export default useStore;