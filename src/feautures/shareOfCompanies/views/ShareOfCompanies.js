import ShareOfCompaniesComponent from "./ShareOfCompaniesComponents";
import useStore from '../../../stores/useStore';
import shallow from 'zustand/shallow';
import initiateWorkflow from "../../api/initiateWorkflow";
import { useEffect, useState } from "react";

const getState = state => [
    state.companyShares,
    state.companySharesWarn,
    state.getCompanyShares
];

const ShareOfCompanies = () => {
    const [companyShares, companySharesWarn, getCompanyShares] = useStore(getState, shallow);
    useEffect(()=>{
        getCompanyShares();
    }, [getCompanyShares]);

    const [companyNameShare, setCompanyNameShare] = useState(companyShares);

    useEffect(() => {
      setCompanyNameShare(companyShares);
    }, [companyShares]);
  
    const changeNameShare = (e, id) => {
      const values = [...companyNameShare];
      values[id][e.target.name] = e.target.value;
      setCompanyNameShare(values);
    }
    const addShare = () => {
      setCompanyNameShare([...companyNameShare, {Y: "", CNAME: ""}]);
    }
    // highlight edited input fields
    var colorKey = [];
    for (var j=0; j<companyShares.length; j++){
      if (companyShares[j].Y === companySharesWarn[j].Y){
        colorKey.push(j);
      }
    }
    const [colorKeys, setcolor] = useState(colorKey);
    const deleteNameShare = (e, id) => {
      e.preventDefault();
      const list = [...companyNameShare];
      list.splice(id, 1);
      setCompanyNameShare(list);
      const clist = [...colorKeys];
      clist.splice(id,1);
      setcolor(clist);
    }
    //remove keys of array to fit tags
    const cname = [];
    const cshare = [];
    for (var i=0; i<companyNameShare.length; i++){
        cname.push(companyNameShare[i].CNAME);
        cshare.push(parseInt(companyNameShare[i].Y));
    }
    
    var checkChange = false;
    if(companySharesWarn.length !== companyNameShare.length){
      checkChange = true;
    }else{
      for(var n=0;n<companyNameShare.length;n++){
        if(companyNameShare[n].Y !== companySharesWarn[n].Y || companyNameShare[n].CNAME !== companySharesWarn[n].CNAME){
          checkChange = true;
        }
      }
    }
    const args = {
        companyShares,
        companyNameShare,
        companySharesWarn,
        changeNameShare,
        addShare,
        deleteNameShare,
        colorKeys,
        onSubmitForm: () => {
          let params = new URLSearchParams(window.location.search);
          let key = parseInt(params.get("key"));
          const args = {
            cid: key,
            companyName: cname,
            companyShare: cshare,
            change: checkChange,
            nameLength: cname.length
          };
          initiateWorkflow(args);
        }
    }

    return <ShareOfCompaniesComponent {...args} />
}

export default ShareOfCompanies;