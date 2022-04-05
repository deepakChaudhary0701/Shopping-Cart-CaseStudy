
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import classes from './side-bar.module.css';

const SideBar = (props) => {
  let allCategories =  useSelector(state => state.category.categories);
  
  
  if(allCategories.length === 0){
     allCategories = JSON.parse(localStorage.getItem('categories'));
  }else{
    localStorage.setItem('categories', JSON.stringify(allCategories));
  }
  return (
    <Card style={{ width: "19rem" }} className={ classes['nav-list']}>
      <ListGroup variant="flush" >
        { allCategories.map( category => <ListGroup.Item key={ category } className={ classes['list-item']}>{ category }</ListGroup.Item>)}
      </ListGroup>
    </Card>
  );
};

export default SideBar;
