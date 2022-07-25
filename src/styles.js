import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  headerImage: {
    backgroundColor: 'white',
    marginLeft: '20px'
    
    // background-color : 'white',
    // padding: '20px',
    // border-bottom: '1px solid lightgrey',
    // display: 'flex'
    // // justify-content: space-between;
    // // position: sticky;
    // // top: 0;
    // // z-index: 1;
  }
}));
