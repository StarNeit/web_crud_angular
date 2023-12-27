In the SharedModule, include every component/pipe/directive you want to share across the application. This module should also import the modules required by Angular, such as CommonModule, FormsModule, ReactiveFormsModule, and others.

This module can be imported by any other module that wishes to use a shared component/pipe/directive or Angular module. To enable this, remember to re-export the components/directives/pipes/modules you want to share. The SharedModule should be created in the src/app/shared folder.
