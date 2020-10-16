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
        <div class="container">
          <h2>Button Group</h2>
          <p>The .btn-group class creates a button group:</p>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <button type="button" class="btn btn-primary">Sony</button>
          </div>
        </div>
        <div class="container">
          <h2>Button Groups Sizes</h2>
          <p>Add class .btn-group-* to size all buttons in a button group.</p>
          <h3>Large Buttons:</h3>
          <div class="btn-group btn-group-lg">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <button type="button" class="btn btn-primary">Sony</button>
          </div>
          <h3>Default Buttons:</h3>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <button type="button" class="btn btn-primary">Sony</button>
          </div>
          <h3>Small Buttons:</h3>
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <button type="button" class="btn btn-primary">Sony</button>
          </div>
        </div>
        <div class="container">
          <h2>Vertical Button Group</h2>
          <p>Use the .btn-group-vertical class to create a vertical button group:</p>
          <div class="btn-group-vertical">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <button type="button" class="btn btn-primary">Sony</button>
          </div>
        </div>
        <div class="container">
          <h2>Nesting Button Groups</h2>
          <p>Nest button groups to create dropdown menus:</p>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Sony
              </button>
              <div class="dropdown-menu">
                <a alt="image" class="dropdown-item" href="#">Tablet</a>
                <a alt="image" class="dropdown-item" href="#">Smartphone</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Split Buttons</h2>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Sony</button>
            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              <span class="caret"></span>
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Tablet</a>
              <a alt="image" class="dropdown-item" href="#">Smartphone</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Vertical Button Group with Dropdown</h2>
          <div class="btn-group-vertical">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Sony
              </button>
              <div class="dropdown-menu">
                <a alt="image" class="dropdown-item" href="#">Tablet</a>
                <a alt="image" class="dropdown-item" href="#">Smartphone</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Button Group</h2>
          <p>Button groups are "inline" by default, which makes them appear side by side when you have multiple groups:</p>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <button type="button" class="btn btn-primary">Sony</button>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">BMW</button>
            <button type="button" class="btn btn-primary">Mercedes</button>
            <button type="button" class="btn btn-primary">Volvo</button>
          </div>
        </div>
        <div class="container">
          <h2>Badges</h2>
          <h1>Example heading <span class="badge badge-secondary">New</span></h1>
          <h2>Example heading <span class="badge badge-secondary">New</span></h2>
          <h3>Example heading <span class="badge badge-secondary">New</span></h3>
          <h4>Example heading <span class="badge badge-secondary">New</span></h4>
          <h5>Example heading <span class="badge badge-secondary">New</span></h5>
          <h6>Example heading <span class="badge badge-secondary">New</span></h6>
        </div>
        <div class="container">
          <h2>Contextual Badges</h2>
          <span class="badge badge-primary">Primary</span>
          <span class="badge badge-secondary">Secondary</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-danger">Danger</span>
          <span class="badge badge-warning">Warning</span>
          <span class="badge badge-info">Info</span>
          <span class="badge badge-light">Light</span>
          <span class="badge badge-dark">Dark</span>
        </div>
        <div class="container">
          <h2>Pill Badges</h2>
          <span class="badge badge-pill badge-primary">Primary</span>
          <span class="badge badge-pill badge-secondary">Secondary</span>
          <span class="badge badge-pill badge-success">Success</span>
          <span class="badge badge-pill badge-danger">Danger</span>
          <span class="badge badge-pill badge-warning">Warning</span>
          <span class="badge badge-pill badge-info">Info</span>
          <span class="badge badge-pill badge-light">Light</span>
          <span class="badge badge-pill badge-dark">Dark</span>
        </div>
        <div class="container">
          <h2>Badge inside a Button</h2>
          <button type="button" class="btn btn-primary">
            Messages <span class="badge badge-light">4</span>
          </button>
          <button type="button" class="btn btn-danger">
            Notifications <span class="badge badge-light">7</span>
          </button>
        </div>
        <div class="container">
          <h2>Basic Progress Bar</h2>
          <p>To create a default progress bar, add a .progress class to a container element and add the progress-bar class to its child element. Use the CSS width property to set the width of the progress bar:</p>
          <div class="progress">
            <div class="progress-bar" style={{width:"70%"}}></div>
          </div>
        </div>
        <div class="container">
          <h2>Progress Bar Height</h2>
          <p>The height of the progress bar is 1rem (16px) by default. Use the CSS height property to change the height:</p> 
          <div class="progress" style={{height:"10px"}}>
            <div class="progress-bar" style={{width:"40%",height:"10px"}}></div>
          </div>
          <br/>
          <div class="progress" style={{height:"20px"}}>>
            <div class="progress-bar" style={{width:"50%",height:"20px"}}></div>
          </div>
          <br/>
          <div class="progress" style={{height:"30px"}}>>
            <div class="progress-bar" style={{width:"50%",height:"30px"}}></div>
          </div>
        </div>
        <div class="container">
          <h2>Progress Bar With Label</h2>
          <div class="progress">
            <div class="progress-bar" style={{width:"70%"}}>70%</div>
          </div>
        </div>
        <div class="container">
          <h2>Colored Progress Bars</h2>
          <p>Use any of the contextual color classes to change the color of the progress bar:</p> 
          <div class="progress">
            <div class="progress-bar" style={{width:"10%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-success" style={{width:"20%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-info" style={{width:"30%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-warning" style={{width:"40%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-danger" style={{width:"50%"}}></div>
          </div><br/>

          <div class="progress border">
            <div class="progress-bar bg-white" style={{width:"60%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-secondary" style={{width:"70%"}}></div>
          </div><br/>

          <div class="progress border">
            <div class="progress-bar bg-light" style={{width:"80%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-dark" style={{width:"90%"}}></div>
          </div>
        </div>
        <div class="container">
          <h2>Colored Progress Bars</h2>
          <p>Use any of the contextual color classes to change the color of the progress bar:</p> 
          <div class="progress">
            <div class="progress-bar" style={{width:"10%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-success  progress-bar-striped" style={{width:"20%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-info progress-bar-striped" style={{width:"30%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-warning progress-bar-striped" style={{width:"40%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-danger progress-bar-striped" style={{width:"50%"}}></div>
          </div><br/>

          <div class="progress border">
            <div class="progress-bar bg-white progress-bar-striped" style={{width:"60%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-secondary progress-bar-striped" style={{width:"70%"}}></div>
          </div><br/>

          <div class="progress border">
            <div class="progress-bar bg-light progress-bar-striped" style={{width:"80%"}}></div>
          </div><br/>

          <div class="progress">
            <div class="progress-bar bg-dark progress-bar-striped" style={{width:"90%"}}></div>
          </div>
        </div>
        <div class="container">
          <h2>Animated Progress Bar</h2>
          <p>Add the .progress-bar-animated class to animate the progress bar:</p> 
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"40%"}}></div>
          </div>
        </div>
        <div class="container">
          <h2>Multiple Progress Bars</h2>
          <p>Create a stacked progress bar by placing multiple bars into the same div with class="progress":</p> 
          <div class="progress">
            <div class="progress-bar bg-success" style={{width:"40%"}}>
              Free Space
            </div>
            <div class="progress-bar bg-warning" style={{width:"10%"}}>
              Warning
            </div>
            <div class="progress-bar bg-danger" style={{width:"20%"}}>
              Danger
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Spinners</h2>
          <p>To create a spinner/loader, use the <code>.spinner-border</code> class:</p>
                                                
          <div class="spinner-border"></div>
        </div>
        <div class="container">
          <h2>Colored Spinners</h2>
          <p>Use any <strong>text color utilites</strong> to add a color to the spinner:</p>
                                                
          <div class="spinner-border text-muted"></div>
          <div class="spinner-border text-primary"></div>
          <div class="spinner-border text-success"></div>
          <div class="spinner-border text-info"></div>
          <div class="spinner-border text-warning"></div>
          <div class="spinner-border text-danger"></div>
          <div class="spinner-border text-secondary"></div>
          <div class="spinner-border text-dark"></div>
          <div class="spinner-border text-light"></div>
        </div>
        <div class="container">
          <h2>Growing Spinners</h2>
          <p>Use the <code>.spinner-grow</code> class if you want the spinner/loader to grow instead of "spin":</p>
                                                
          <div class="spinner-grow text-muted"></div>
          <div class="spinner-grow text-primary"></div>
          <div class="spinner-grow text-success"></div>
          <div class="spinner-grow text-info"></div>
          <div class="spinner-grow text-warning"></div>
          <div class="spinner-grow text-danger"></div>
          <div class="spinner-grow text-secondary"></div>
          <div class="spinner-grow text-dark"></div>
          <div class="spinner-grow text-light"></div>
        </div>
        <div class="container">
          <h2>Spinner Size</h2>
          <p>Use <code>.spinner-border-sm</code> or <code>.spinner-grow-sm</code> to create a smaller spinner:</p>
                                                
          <div class="spinner-border spinner-border-sm"></div>
          <div class="spinner-grow spinner-grow-sm"></div>
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
        <div class="container">
          <h2>Pagination</h2>
          <p>To create a basic pagination, add the .pagination class to an ul element. Then add the .page-item to each li element and a .page-link class to each link inside li:</p>                  
          <ul class="pagination">
            <li class="page-item"><a alt="image" class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">3</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">Next</a></li>
          </ul>
        </div>
        <div class="container">
          <h2>Pagination - Active State</h2>
          <p>Add class .active to let the user know which page he/she is on:</p>
          <ul class="pagination">
            <li class="page-item"><a alt="image" class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">1</a></li>
            <li class="page-item active"><a alt="image" class="page-link" href="#">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">3</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">Next</a></li>
          </ul>
        </div>
        <div class="container">
          <h2>Pagination - Disabled State</h2>
          <p>Add class .disabled if a page for some reason is disabled:</p>
          <ul class="pagination">
            <li class="page-item disabled"><a alt="image" class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">3</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">Next</a></li>
          </ul>
        </div>
        <div class="container">
          <h2>Pagination - Sizing</h2>
          <p>Add class .pagination-lg for larger blocks or .pagination-sm for smaller blocks.</p>

          <p>Large:</p>
          <ul class="pagination pagination-lg">
            <li class="page-item"><a alt="image" class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">3</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">Next</a></li>
          </ul>

          <p>Default:</p>
          <ul class="pagination">
            <li class="page-item"><a alt="image" class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">3</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">Next</a></li>
          </ul>

          <p>Small:</p>
          <ul class="pagination pagination-sm">
            <li class="page-item"><a alt="image" class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">3</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="#">Next</a></li>
          </ul>
        </div>
        <div class="container">
          <h2>Pagination</h2>
          <p>Use utilitiy classes to change the alignment of the pagination:</p>                  
          <ul class="pagination">
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">Next</a></li>
          </ul>
          <ul class="pagination justify-content-center">
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">Next</a></li>
          </ul>
          <ul class="pagination justify-content-end">
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a alt="image" class="page-link" href="javascript:void(0);">Next</a></li>
          </ul>
        </div>
        <div class="container">
          <h2>Breadcrumbs</h2>
          <p>The .breadcrumb class indicates the current page's location within a navigational hierarchy:</p>                  
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Photos</a></li>
            <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
            <li class="breadcrumb-item"><a href="#">Italy</a></li>
            <li class="breadcrumb-item active">Rome</li>
          </ul>
        </div>
        <div class="container">
          <h2>Basic List Group</h2>
          <ul class="list-group">
            <li class="list-group-item">First item</li>
            <li class="list-group-item">Second item</li>
            <li class="list-group-item">Third item</li>
          </ul>
        </div>
        <div class="container">
          <h2>Active Item in a List Group</h2>
          <ul class="list-group">
            <li class="list-group-item active">Active item</li>
            <li class="list-group-item">Second item</li>
            <li class="list-group-item">Third item</li>
          </ul>
        </div>
        <div class="container">
          <h2>List Group With Linked Items</h2>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">First item</a>
            <a href="#" class="list-group-item list-group-item-action">Second item</a>
            <a href="#" class="list-group-item list-group-item-action">Third item</a>
          </div>
        </div>
        <div class="container">
          <h2>List Group With a Disabled Item</h2>
          <p>The disabled class adds a lighter text color to the disabled item. And if used on links, it will remove the default hover effect.</p>
          <div class="list-group">
            <a href="#" class="list-group-item disabled">Disabled item</a>
            <a href="#" class="list-group-item disabled">Disabled item</a>
            <a href="#" class="list-group-item">Third item</a>
          </div>
        </div>
        <div class="container">
          <h2>Flush / Remove Borders</h2>
          <p>Use the .list-group-flush class to remove some borders and rounded corners:</p>
        </div>
          
        <div class="container">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">First item</li>
            <li class="list-group-item">Second item</li>
            <li class="list-group-item">Third item</li>
            <li class="list-group-item">Fourth item</li>
          </ul>
        </div>
        <div class="container">
          <h2>Horizontal List Groups</h2>
          <p>The .list-group-horizontal class displays the list items horizontally instead of vertically:</p>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">First item</li>
            <li class="list-group-item">Second item</li>
            <li class="list-group-item">Third item</li>
            <li class="list-group-item">Fourth item</li>
          </ul>
        </div>
        <div class="container">
          <h2>List Group With Contextual Classes</h2>
          <ul class="list-group">
            <li class="list-group-item list-group-item-success">Success item</li>
            <li class="list-group-item list-group-item-secondary">Secondary item</li>
            <li class="list-group-item list-group-item-info">Info item</li>
            <li class="list-group-item list-group-item-warning">Warning item</li>
            <li class="list-group-item list-group-item-danger">Danger item</li>
            <li class="list-group-item list-group-item-primary">Primary item</li>
            <li class="list-group-item list-group-item-dark">Dark item</li>
            <li class="list-group-item list-group-item-light">Light item</li>
          </ul>
        </div>
        <div class="container mt-3">
          <h2>List Group With Badges</h2>
          <p>Combine .badge classes with utility/helper classes to add badges inside the list group:</p>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Inbox
              <span class="badge badge-primary badge-pill">12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Ads
              <span class="badge badge-primary badge-pill">50</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Junk
              <span class="badge badge-primary badge-pill">99</span>
            </li>
          </ul>
        </div>
        <div class="container">
          <h2>Basic Card</h2>
          <div class="card">
            <div class="card-body">Basic card</div>
          </div>
        </div>
        <div class="container">
          <h2>Card Header and Footer</h2>
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-body">Content</div> 
            <div class="card-footer">Footer</div>
          </div>
        </div>
        <div class="container">
          <h2>Cards with Contextual Classes</h2>
          <div class="card">
            <div class="card-body">Basic card</div>
          </div>
          <br/>
          <div class="card bg-primary text-white">
            <div class="card-body">Primary card</div>
          </div>
          <br/>
          <div class="card bg-success text-white">
            <div class="card-body">Success card</div>
          </div>
          <br/>
          <div class="card bg-info text-white">
            <div class="card-body">Info card</div>
          </div>
          <br/>
          <div class="card bg-warning text-white">
            <div class="card-body">Warning card</div>
          </div>
          <br/>
          <div class="card bg-danger text-white">
            <div class="card-body">Danger card</div>
          </div>
          <br/>
          <div class="card bg-secondary text-white">
            <div class="card-body">Secondary card</div>
          </div>
          <br/>
          <div class="card bg-dark text-white">
            <div class="card-body">Dark card</div>
          </div>
          <br/>
          <div class="card bg-light text-dark">
            <div class="card-body">Light card</div>
          </div>
        </div>
        <div class="container">
          <h2>Card titles, text, and links</h2>
          <p>Use .card-title to add card titles to any heading element. The .card-text class is used to remove bottom margins for a p element if it is the last child (or the only one) in card-body. The .card-link class adds a blue color to any link, and a hover effect.</p>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some example text. Some example text.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Card Image</h2>
          <p>Image at the top (card-img-top):</p>
          <div class="card" style={{width:"400px"}}>
            <img class="card-img-top" src={paris} alt="Card image" style={{width:"100%"}}/>
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
          <br/>
          
          <p>Image at the bottom (card-img-bottom):</p>
          <div class="card" style={{width:"400px"}}>
            <div class="card-body">
              <h4 class="card-title">Jane Doe</h4>
              <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
            <img class="card-img-bottom" src={paris} alt="Card image" style={{width:"100%"}}/>
          </div>
        </div>
        <div class="container">
          <h2>Stretched Link in Card</h2>
          <p>Add the .stretched-link class to a link inside the card, and it will make the whole card clickable (the card will act as a link):</p>
          <div class="card" style={{width:"400px"}}>
            <img class="card-img-top" src={paris} alt="Card image" style={{width:"100%"}}/>
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary stretched-link">See Profile</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Card Image Overlay</h2>
          <p>Turn an image into a card background and use .card-img-overlay to overlay the card's text:</p>
          <div class="card img-fluid" style={{width:"500px"}}>
            <img class="card-img-top" src={paris} alt="Card image" style={{width:"100%"}}/>
            <div class="card-img-overlay">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Cards Columns</h2>
          <p>The .card-columns class creates a masonry-like grid of cards. The layout will automatically adjust as you insert more cards.</p>
          <p><strong>Note:</strong> The cards are displayed vertically on small screens (less than 576px):</p>
          <div class="card-columns">
            <div class="card bg-primary">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the first card</p>
              </div>
            </div>
            <div class="card bg-warning">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the second card</p>
              </div>
            </div>
            <div class="card bg-success">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the third card</p>
              </div>
            </div>
            <div class="card bg-danger">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the fourth card</p>
              </div>
            </div>  
            <div class="card bg-light">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the fifth card</p>
              </div>
            </div>
            <div class="card bg-info">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the sixth card</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Card Deck</h2>
          <p>The .card-deck class creates an <strong>equal height and width</strong> grid of cards. The layout will automatically adjust as you insert more cards.</p>
          <p>In this example we have added extra content to the first card, to make it taller. Notice how the other cards follow.</p>
          <p><strong>Note:</strong> The cards are displayed vertically on small screens (less than 576px):</p>
          <div class="card-deck">
            <div class="card bg-primary">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the first card</p>
                <p class="card-text">Some more text to increase the height</p>
                <p class="card-text">Some more text to increase the height</p>
                <p class="card-text">Some more text to increase the height</p>
              </div>
            </div>
            <div class="card bg-warning">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the second card</p>
              </div>
            </div>
            <div class="card bg-success">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the third card</p>
              </div>
            </div>
            <div class="card bg-danger">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the fourth card</p>
              </div>
            </div>  
          </div>
        </div>
        <div class="container">
          <h2>Card Group</h2>
          <p>The .card-group class is similar to .card-deck, which creates an <strong>equal height and width</strong> grid of cards.</p>
          <p>However, the .card-group class removes left and right margins between each card.</p>
          <p>In this example we have added extra content to the first card, to make it taller. Notice how the other cards follow.</p>
          <p><strong>Note:</strong> The cards are displayed vertically on small screens (less than 576px), <strong>WITH</strong> top and bottom margin:</p>
          <div class="card-group">
            <div class="card bg-primary">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the first card</p>
                <p class="card-text">Some more text to increase the height</p>
                <p class="card-text">Some more text to increase the height</p>
                <p class="card-text">Some more text to increase the height</p>
              </div>
            </div>
            <div class="card bg-warning">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the second card</p>
              </div>
            </div>
            <div class="card bg-success">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the third card</p>
              </div>
            </div>
            <div class="card bg-danger">
              <div class="card-body text-center">
                <p class="card-text">Some text inside the fourth card</p>
              </div>
            </div>  
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>The .dropdown class is used to indicate a dropdown menu.</p>
          <p>Use the .dropdown-menu class to actually build the dropdown menu.</p>
          <p>To open the dropdown menu, use a button or a link with a class of .dropdown-toggle and data-toggle="dropdown".</p>                                          
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item" href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>The .dropdown-divider class is used to separate links inside the dropdown menu with a thin horizontal line:</p>
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item" href="#">Link 3</a>
              <div class="dropdown-divider"></div>
              <a alt="image" class="dropdown-item" href="#">Another link</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>The .dropdown-header class is used to add headers inside the dropdown menu:</p>
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <h5 class="dropdown-header">Dropdown header</h5>
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item" href="#">Link 3</a>
              <h5 class="dropdown-header">Dropdown header</h5>
              <a alt="image" class="dropdown-item" href="#">Another link</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>The .active class adds a blue background color to the active link.</p>
          <p>The .disabled class disables a dropdown item (grey text color and a no-parking-sign on hover).</p>
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Normal</a>
              <a alt="image" class="dropdown-item active" href="#">Active</a>
              <a alt="image" class="dropdown-item disabled" href="#">Disabled</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>Add the .dropright class next to the dropdown menu to right-align the dropdown. Note that the caret/arrows is added automatically:</p>
          <div class="dropdown dropright">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropright button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item" href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>Add the .dropleft class next to the dropdown menu to left-align the dropdown. Note that the caret/arrow is added automatically. Also note that we float the dropdown to the right:</p>
          <div class="dropdown dropleft float-right">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropleft button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item" href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>Add the .dropdown-menu-right class to .dropdown-menu to right-align the dropdown menu.</p>
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Wide dropdown button to demonstrate this example
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item" href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>The .dropup class makes the dropdown menu expand upwards instead of downwards:</p>
          <div class="dropup">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropup button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdowns</h2>
          <p>The .dropdown-item-text class is used to add plain text to a dropdown, or used on links for default link styling.</p>                                         
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
              <a alt="image" class="dropdown-item-text" href="#">Text Link</a>
              <span class="dropdown-item-text">Just Text</span>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Nesting Button Groups</h2>
          <p>Nest button groups to create dropdown menus:</p>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Sony
              </button>
              <div class="dropdown-menu">
                <a alt="image" class="dropdown-item" href="#">Tablet</a>
                <a alt="image" class="dropdown-item" href="#">Smartphone</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Dropdown Split Buttons</h2>
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>
          
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>

          <div class="btn-group">
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>

          <div class="btn-group">
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>

          <div class="btn-group">
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>

          <div class="btn-group">
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            </button>
            <div class="dropdown-menu">
              <a alt="image" class="dropdown-item" href="#">Link 1</a>
              <a alt="image" class="dropdown-item" href="#">Link 2</a>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Vertical Button Group with Dropdown</h2>
          <div class="btn-group-vertical">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Sony
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Tablet</a>
                <a class="dropdown-item" href="#">Smartphone</a>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
