import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer'
import Intro from './components/Intro'
import { IntroContent } from './data/IntroContent'
import { ListContent } from './data/ListContent'
import List from './components/List'
import Table from './components/Table'
import { TableContent } from './data/TableContent'
import { CardContent } from './data/CardContent'
import Card from './components/Card'

function App() {
  return <>
  <div className="container">
    <Footer/>
    <Intro header={IntroContent.header} text={IntroContent.text}/>
    <div className="row">
      {ListContent.map((content, index) => (
        <List key={index} title={content.title} items={content.items}/>
      ))}
    </div>
    <div className="row mb-1">
      <Table title={TableContent.title} table_head={TableContent.table_head} table_body={TableContent.table_body}/>
    </div>
    <div className="row mb-1">
      {CardContent.map((content, index) => (
        <Card key={index} title={content.title} card_title={content.card_title} first={content.first} vesz={content.vesz} kedvenc={content.kedvenc} other={content.other}/>
      ))}
    </div>
  </div>
  </>
}

export default App
