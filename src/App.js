import React from 'react';
import photo from './cinqueterre.jpg';
import paris from './paris.jpg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <>
        <div class="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
        <div class="container-sm  text-center">
          <div class="row  pt-3">
            <div class="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
        <div class="container-sm text-right  pt-3">
          <h1>My First Bootstrap Page</h1>
          <p>This is some text.</p>
        </div>
        <div class="container-sm-fluid text-left  pt-3">
          <h1>My First Bootstrap Page</h1>
          <p>This is some text.</p>
        </div>
        <div class="container-sm p-3 my-3 border text-left">
          <h1>
            My First Bootstrap Page
          </h1>
          <p>
            This container-sm has a dark background color and a white text, and some extra padding and margins.
          </p>
        </div>

        <div class="container-sm p-3 my-3 bg-dark text-white">
          <h1>
            My First Bootstrap Page
          </h1>
          <p>
            This container-sm has a dark background color and a white text, and some extra padding and margins.
          </p>
        </div>

        <div class="container-sm p-3 my-3 bg-primary text-white">
          <h1>
            My First Bootstrap Page
          </h1>
          <p>
            This container-sm has a dark background color and a white text, and some extra padding and margins.
          </p>
        </div>
        <div class="container">
          <div class="row p-3 bg-dark text-white mb-3">
            <div class="col-sm-3">.col-sm-3</div>
            <div class="col-sm-3">.col-sm-3</div>
            <div class="col-sm-3">.col-sm-3</div>
            <div class="col-sm-3">.col-sm-3</div>
          </div>  
          <div class="row p-3 bg-dark text-white mb-3">
            <div class="col-sm-4">.col-sm-4</div>
            <div class="col-sm-8">.col-sm-8</div>
          </div>       
        </div>
        <div class="container">
          <h1>h1 Bootstrap heading (2.5rem = 40px)</h1>
          <h2>h2 Bootstrap heading (2rem = 32px)</h2>
          <h3>h3 Bootstrap heading (1.75rem = 28px)</h3>
          <h4>h4 Bootstrap heading (1.5rem = 24px)</h4>
          <h5>h5 Bootstrap heading (1.25rem = 20px)</h5>
          <h6>h6 Bootstrap heading (1rem = 16px)</h6>
        </div>
        <div class="container">
          <h1>Display Headings</h1>
          <p>Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight):</p>
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
        </div>
        <div class="container">
          <h1>Lighter, Secondary Text</h1>
          <p>The small element is used to create a lighter, secondary text in any heading:</p>       
          <h1>h1 heading <small>secondary text</small></h1>
          <h2>h2 heading <small>secondary text</small></h2>
          <h3>h3 heading <small>secondary text</small></h3>
          <h4>h4 heading <small>secondary text</small></h4>
          <h5>h5 heading <small>secondary text</small></h5>
          <h6>h6 heading <small>secondary text</small></h6>
        </div>
        <div class="container">
          <h1>Highlight Text</h1>    
          <p>Use the mark element to <mark>highlight</mark> text.</p>
        </div>
        <div class="container">
          <h1>Abbreviations</h1>
          <p>The abbr element is used to mark up an abbreviation or acronym:</p>
          <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
        </div>
        <div class="container">
          <h1>Blockquotes</h1>
          <p>The blockquote element is used to present content from another source:</p>
          <blockquote class="blockquote">
            <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
            <footer class="blockquote-footer">From WWF's website</footer>
          </blockquote>
        </div>
        <div class="container">
          <h1>Description Lists</h1>    
          <p>The dl element indicates a description list:</p>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>     
        </div>
        <div class="container">
          <h1>Code Snippets</h1>
          <p>Inline snippets of code should be embedded in the code element:</p>
          <p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>
        </div>
        <div class="container">
          <h1>Keyboard Inputs</h1>
          <p>To indicate input that is typically entered via the keyboard, use the kbd element:</p>
          <p>Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p>
        </div>
        <div class="container">
          <h1>Multiple Code Lines</h1>
          <p>For multiple lines of code, use the pre element:</p>
          <pre>
            Text in a pre element
            is displayed in a fixed-width
            font, and it preserves
            both      spaces and
            line breaks.
          </pre>
        </div>
        <div class="container">
          <h2>Contextual Backgrounds</h2>
          <p>Use the contextual background classes to provide "meaning through colors".</p>
          <p>Note that you can also add a .text-* class if you want a different text color:</p>
          <p class="bg-primary text-white">This text is important.</p>
          <p class="bg-success text-white">This text indicates success.</p>
          <p class="bg-info text-white">This text represents some information.</p>
          <p class="bg-warning text-white">This text represents a warning.</p>
          <p class="bg-danger text-white">This text represents danger.</p>
          <p class="bg-secondary text-white">Secondary background color.</p>
          <p class="bg-dark text-white">Dark grey background color.</p>
          <p class="bg-light text-dark">Light grey background color.</p>
        </div>
        <div class="container">
          <h2>Contextual Colors</h2>
          <p>Use the contextual classes to provide "meaning through colors":</p>
          <p class="text-muted">This text is muted.</p>
          <p class="text-primary">This text is important.</p>
          <p class="text-success">This text indicates success.</p>
          <p class="text-info">This text represents some information.</p>
          <p class="text-warning">This text represents a warning.</p>
          <p class="text-danger">This text represents danger.</p>
          <p class="text-secondary">Secondary text.</p>
          <p class="text-dark">This text is dark grey.</p>
          <p class="text-body">Default body color (often black).</p>
          <p class="text-light">This text is light grey (on white background).</p>
          <p class="text-white">This text is white (on white background).</p>
        </div>
        <div class="container">
          <h2>Basic Table</h2>
          <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>            
          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Striped Rows</h2>
          <p>The .table-striped class adds zebra-stripes to a table:</p>            
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Bordered Table</h2>
          <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Hover Rows</h2>
          <p>The .table-hover class enables a hover state (grey background on mouse over) on table rows:</p>            
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Black/Dark Table</h2>
          <p>The .table-dark class adds a black background to the table:</p>            
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div><div class="container">
          <h2>Dark Striped Table</h2>
          <p>Combine .table-dark and .table-striped to create a dark, striped table:</p>            
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Hoverable Dark Table</h2>
          <p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>            
          <table class="table table-dark table-hover">
            <thead className="thead-light">
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Borderless Table</h2>
          <p>The .table-borderless class removes borders from the table:</p>            
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Contextual Classes</h2>
          <p>Contextual classes can be used to color the table, table rows or table cells. The classes that can be used are: .table-primary, .table-success, .table-info, .table-warning, .table-danger, .table-active, .table-secondary, .table-light and .table-dark:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Default</td>
                <td>Defaultson</td>
                <td>def@somemail.com</td>
              </tr>      
              <tr class="table-primary">
                <td>Primary</td>
                <td>Joe</td>
                <td>joe@example.com</td>
              </tr>
              <tr class="table-success">
                <td>Success</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr class="table-danger">
                <td>Danger</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr class="table-info">
                <td>Info</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr class="table-warning">
                <td>Warning</td>
                <td>Refs</td>
                <td>bo@example.com</td>
              </tr>
              <tr class="table-active">
                <td>Active</td>
                <td>Activeson</td>
                <td>act@example.com</td>
              </tr>
              <tr class="table-secondary">
                <td>Secondary</td>
                <td>Secondson</td>
                <td>sec@example.com</td>
              </tr>
              <tr class="table-light">
                <td>Light</td>
                <td>Angie</td>
                <td>angie@example.com</td>
              </tr>
              <tr class="table-dark text-dark">
                <td>Dark</td>
                <td>Bo</td>
                <td>bo@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Small Table</h2>
          <p>The .table-sm class makes the table smaller by cutting cell padding in half:</p>
          <table class="table table-bordered  table-responsive-sm">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <h2>Rounded Corners</h2>
          <p>The .rounded class adds rounded corners to an image:</p>            
          <img src={photo} class="rounded" alt="Cinque Terre" width="304" height="236"/> 
        </div>
        <div class="container">
          <h2>Circle</h2>
          <p>The .rounded-circle class shapes the image to a circle:</p>            
          <img src={photo} class="rounded-circle float-center" alt="Cinque Terre" width="304" height="304"/> 
        </div>
        <div class="container">
          <h2>Thumbnail</h2>
          <p>The .img-thumbnail class creates a thumbnail of the image:</p>            
          <img src={photo} class="img-thumbnail " alt="Cinque Terre" width="304" height="236"/> 
        </div>
        <div class="container">
          <h2>Aligning images</h2>
          <p>Use the float classes to float the image to the left or to the right:</p> 
          <img src={paris} class="float-left" alt="Paris" width="304" height="236"/> 
          <img src={paris} class="float-right" alt="Paris" width="304" height="236"/> 
        </div>
        <div class="container">
          <h2>Centered Image</h2>
          <p>Center an image by adding the utility classes .mx-auto (margin:auto) and .d-block (display:block) to the image:</p> 
          <img src={paris} class="mx-auto d-block" alt="paris" style={{width:"50%"}}/>
        </div>
        <div class="container">
          <h2>Image</h2>
          <p>The .img-fluid class makes the image scale nicely to the parent element (resize the browser window to see the effect):</p>
          <img class="img-fluid" src={paris} alt="Chania" width="460" height="345"/> 
        </div>
        <div class="container">
          <div class="jumbotron">
            <h1>Bootstrap Tutorial</h1>      
            <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
          </div>
          <p>This is some text.</p>      
          <p>This is another text.</p>      
        </div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>Bootstrap Tutorial</h1>      
            <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
          </div>
        </div>

        <div class="container">
          <p>This is some text.</p>      
          <p>This is another text.</p>      
        </div>
        <div class="container">
          <h2>Alerts</h2>
          <p>Alerts are created with the .alert class, followed by a contextual color classes:</p>
          <div class="alert alert-success">
            <strong>Success!</strong> This alert box could indicate a successful or positive action.
          </div>
          <div class="alert alert-info">
            <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
          </div>
          <div class="alert alert-warning">
            <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
          </div>
          <div class="alert alert-danger">
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
          </div>
          <div class="alert alert-primary">
            <strong>Primary!</strong> Indicates an important action.
          </div>
          <div class="alert alert-secondary">
            <strong>Secondary!</strong> Indicates a slightly less important action.
          </div>
          <div class="alert alert-dark">
            <strong>Dark!</strong> Dark grey alert.
          </div>
          <div class="alert alert-light">
            <strong>Light!</strong> Light grey alert.
          </div>
        </div>
        <div class="container">
          <h2>Alert Links</h2>
          <p>Add the alert-link class to any links inside the alert box to create "matching colored links".</p>
          <div class="alert alert-success">
            <strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-info">
            <strong>Info!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-warning">
            <strong>Warning!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-danger">
            <strong>Danger!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-primary">
            <strong>Primary!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-secondary">
            <strong>Secondary!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-dark">
            <strong>Dark!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
          <div class="alert alert-light">
            <strong>Light!</strong> You should <a href="#" class="alert-link">read this message</a>.
          </div>
        </div>
        <div class="container">
          <h2>Alerts</h2>
          <p>The button with class="close" and data-dismiss="alert" is used to close the alert box.</p>
          <p>The alert-dismissible class adds some extra padding to the close button.</p>
          <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> This alert box could indicate a successful or positive action.
          </div>
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
          </div>
          <div class="alert alert-warning alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
          </div>
          <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
          </div>
          <div class="alert alert-primary alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Primary!</strong> Indicates an important action.
          </div>
          <div class="alert alert-secondary alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Secondary!</strong> Indicates a slightly less important action.
          </div>
          <div class="alert alert-dark alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Dark!</strong> Dark grey alert.
          </div>
          <div class="alert alert-light alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Light!</strong> Light grey alert.
          </div>
        </div>
        <div class="container">
          <h2>Animated Alerts</h2>
          <p>The .fade and .show classes adds a fading effect when closing the alert message.</p>
          <div class="alert alert-success alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> This alert box could indicate a successful or positive action.
          </div>
          <div class="alert alert-info alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
          </div>
          <div class="alert alert-warning alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
          </div>
          <div class="alert alert-danger alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
          </div>
          <div class="alert alert-primary alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Primary!</strong> Indicates an important action.
          </div>
          <div class="alert alert-secondary alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Secondary!</strong> Indicates a slightly less important action.
          </div>
          <div class="alert alert-dark alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Dark!</strong> Dark grey alert.
          </div>
          <div class="alert alert-light alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Light!</strong> Light grey alert.
          </div>
        </div>
        <div class="container">
          <h2>Button Styles</h2>
          <button type="button" class="btn">Basic</button>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-link">Link</button>      
        </div>
        <div class="container">
          <h2>Button Elements</h2>
          <a href="#" class="btn btn-info" role="button">Link Button</a>
          <button type="button" class="btn btn-info">Button</button>
          <input type="button" class="btn btn-info" value="Input Button"/>
          <input type="submit" class="btn btn-info" value="Submit Button"/>
        </div>
        <div class="container">
          <h2>Button Outline</h2>
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-info">Info</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
          <button type="button" class="btn btn-outline-dark">Dark</button>
          <button type="button" class="btn btn-outline-light text-dark">Light</button>
        </div>
        <div class="container">
          <h2>Button Sizes</h2>
          <button type="button" class="btn btn-primary btn-lg">Large</button>
          <button type="button" class="btn btn-primary btn-md">Default</button>    
          <button type="button" class="btn btn-primary btn-sm">Small</button>
        </div>
        <div class="container">
          <h2>Block Level Buttons</h2>
          <button type="button" class="btn btn-primary btn-block">Button 1</button>
          <button type="button" class="btn btn-success btn-block">Button 2</button>
          <br/>
          
          <h2>Large Block Level Buttons</h2>
          <button type="button" class="btn btn-primary btn-lg btn-block">Button 1</button>
          <button type="button" class="btn btn-success btn-lg btn-block">Button 2</button>
          <br/>
          
          <h2>Small Block Level Buttons</h2>
          <button type="button" class="btn btn-primary btn-sm btn-block">Button 1</button>
          <button type="button" class="btn btn-success btn-sm btn-block">Button 2</button>
        </div>
        <div class="container">
          <h2>Button States</h2>
          <button type="button" class="btn btn-primary">Primary Button</button>
          <button type="button" class="btn btn-primary active">Active Primary</button>
          <button type="button" class="btn btn-primary" disabled>Disabled Primary</button>
          <a href="#" class="btn btn-primary disabled">Disabled Link</a>
        </div>
        <div class="container">
          <h2>Spinner Buttons</h2>
          <p>Add spinners to buttons:</p>
                                                
          <button class="btn btn-primary">
            <span class="spinner-border spinner-border-sm"></span>
          </button>

          <button class="btn btn-primary">
            <span class="spinner-border spinner-border-sm"></span>
            Loading..
          </button>
          
          <button class="btn btn-primary" disabled>
            <span class="spinner-border spinner-border-sm"></span>
            Loading..
          </button>
          
          <button class="btn btn-primary" disabled>
            <span class="spinner-grow spinner-grow-sm"></span>
            Loading..
          </button>
        </div>

      </>
  );
}

export default App;
