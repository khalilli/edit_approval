import create from 'zustand';
import {devtools} from 'zustand/middleware';
import initiateWorkflow from '../feautures/companyDetails/api/initiateWorkflow';

const handleSetCompany = (set, get, args) => {
    const companyDetails = Object.assign({}, get().companyDetails);
    for (const object of args) {
        switch (object.property) {
            case 'name':
                companyDetails.name = object.value;
                break;
            case 'segment':
                companyDetails.segment = object.value; 
                break;
            case 'share':
                companyDetails.share = object.value;
                break;
            case 'numberOfEmployees':
                companyDetails.numberOfEmployees = object.value;
                break;
            case 'ceo':
                companyDetails.ceo = object.value;
                break;
            case 'countryOfOperation':
                companyDetails.countryOfOperation = object.value;
                break;
            default:
                break;
        }
    }
    set({companyDetails});
}

const handleInitiateWorkflow = async (set, get) => {
    const companyDetails = get().companyDetails;
    const args = {
        cname: companyDetails.name,
        countemp: companyDetails.numberOfEmployees,
        ceo: companyDetails.ceo
    };
    await initiateWorkflow(args);
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
    setCompanyDetails:  args => handleSetCompany(set, get, args),
    setInitialCompanyDetails: () => set({companyDetails: {
        name: '',
        segment: '',
        share: 0,
        numberOfEmployees: 0,
        ceo: '',
        countryOfOperation: ''
    }}),
    initWorkflow: () => handleInitiateWorkflow(set, get)
})

const useStore = create(devtools(store));

export default useStore;


