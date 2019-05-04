import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { UserIndexComponent } from './users/user-index/user-index.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserGetComponent } from './users/user-get/user-get.component';
import { GestionAssureIndexComponent } from './gestionAssures/gestion-assure-index/gestion-assure-index.component';
import { GestionAssureAddComponent } from './gestionAssures/gestion-assure-add/gestion-assure-add.component';
import { GestionAssureEditComponent } from './gestionAssures/gestion-assure-edit/gestion-assure-edit.component';
import { GestionAssureDetailsComponent } from './gestionAssures/gestion-assure-details/gestion-assure-details.component';
import { GestionFormulaireIndexComponent } from './gestionFormulaire/gestion-formulaire-index/gestion-formulaire-index.component';
import { GestionFormulaireAddComponent } from './gestionFormulaire/gestion-formulaire-add/gestion-formulaire-add.component';
import { GestionFormulaireEditComponent } from './gestionFormulaire/gestion-formulaire-edit/gestion-formulaire-edit.component';
import { GestionFormulaireDetailsComponent } from './gestionFormulaire/gestion-formulaire-details/gestion-formulaire-details.component';
import { EtapeAdministrativeIndexComponent } from './etapeAdministratives/etape-administrative-index/etape-administrative-index.component';
import { EtapeAdministrativeAddComponent } from './etapeAdministratives/etape-administrative-add/etape-administrative-add.component';
import { ControlMedicalDetailsComponent } from './controlMedicals/control-medical-details/control-medical-details.component';
import { ControlMedicalAddComponent } from './controlMedicals/control-medical-add/control-medical-add.component';
import { ControlMedicalIndexComponent } from './controlMedicals/control-medical-index/control-medical-index.component';
import { SaisiesDossiersIndexComponent } from './saisiedossier/saisies-dossiers-index/saisies-dossiers-index.component';
import { SaisiesDossiersDetailsComponent } from './saisiedossier/saisies-dossiers-details/saisies-dossiers-details.component';
import { SaisiesDossiersEditComponent } from './saisiedossier/saisies-dossiers-edit/saisies-dossiers-edit.component';
import { SaisiesDossiersAddComponent } from './saisiedossier/saisies-dossiers-add/saisies-dossiers-add.component';
import { ValidationIndexComponent } from './validations/validation-index/validation-index.component';
import { ValidationAddComponent } from './validations/validation-add/validation-add.component';
import { ValidationEditComponent } from './validations/validation-edit/validation-edit.component';
import { ValidationDetailsComponent } from './validations/validation-details/validation-details.component';
import { ParametrageIndexComponent } from './parametrages/parametrage-index/parametrage-index.component';
import { GestionautorisationDetailsComponent } from './Gestionautorisations/gestionautorisation-details/gestionautorisation-details.component';
import { GestionautorisationEditComponent } from './Gestionautorisations/gestionautorisation-edit/gestionautorisation-edit.component';
import { GestionautorisationAddComponent } from './Gestionautorisations/gestionautorisation-add/gestionautorisation-add.component';
import { GestionautorisationIndexComponent } from './Gestionautorisations/gestionautorisation-index/gestionautorisation-index.component';
import { ParametrageFormulaireIndexComponent } from './paramétrageFormulaires/parametrage-formulaire-index/parametrage-formulaire-index.component';
import { ParametrageFormulaireAddComponent } from './paramétrageFormulaires/parametrage-formulaire-add/parametrage-formulaire-add.component';
import { ParametrageFormulaireEditComponent } from './paramétrageFormulaires/parametrage-formulaire-edit/parametrage-formulaire-edit.component';
import { ParametrageFormulaireDetailsComponent } from './paramétrageFormulaires/parametrage-formulaire-details/parametrage-formulaire-details.component';
import { ParametrageConventionIndexComponent } from './ParamétrageConventions/parametrage-convention-index/parametrage-convention-index.component';
import { ParametrageConventionAddComponent } from './ParamétrageConventions/parametrage-convention-add/parametrage-convention-add.component';
import { ParametrageConventionEditComponent } from './ParamétrageConventions/parametrage-convention-edit/parametrage-convention-edit.component';
import { ParametrageConventionDetailsComponent } from './ParamétrageConventions/parametrage-convention-details/parametrage-convention-details.component';
import { ComptabilitesIndexComponent } from './comptabilité/comptabilites-index/comptabilites-index.component';
import { ComptabilitesAddComponent } from './comptabilité/comptabilites-add/comptabilites-add.component';
import { ComptabilitesEditComponent } from './comptabilité/comptabilites-edit/comptabilites-edit.component';
import { ComptabilitesDetailleComponent } from './comptabilité/comptabilites-detaille/comptabilites-detaille.component';
import { SpecifierlesmontantsIndexComponent } from './spécifierlesmontants/specifierlesmontants-index/specifierlesmontants-index.component';
import { SpecifierlesmontantsAddComponent } from './spécifierlesmontants/specifierlesmontants-add/specifierlesmontants-add.component';
import { ConsulterAvisMedicalValideIndexComponent } from './ConsulterAvisMedicalValide/consulter-avis-medical-valide-index/consulter-avis-medical-valide-index.component';
import { ConsulterAvisMedicalValideAddComponent } from './ConsulterAvisMedicalValide/consulter-avis-medical-valide-add/consulter-avis-medical-valide-add.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    /**
     * gestion des utilisateurs 
     *  */ 

    
    { // liste des utilisateurs
        path: 'users',
        component: UserIndexComponent
    },
    { // add user
        path: 'users/create',
        component: UserAddComponent
    },
    { // edit user by id
        path: 'users/edit/:id',
        component: UserEditComponent
    },
    { // get single user by id
        path: 'users/details/:id',
        component: UserGetComponent
    },

    /**
     * gestion des Assurés 
     *  */ 

    
    { // liste des Assurés
        path: 'Assurés',
        component: GestionAssureIndexComponent
    },
    { // add Assurés
        path: 'Assurés/create',
        component: GestionAssureAddComponent
    },
    { // edit Assurés by id
        path: 'Assurés/edit/:id',
        component: GestionAssureEditComponent
    },
    { // get single Assurés by id
        path: 'Assurés/details/:id',
        component: GestionAssureDetailsComponent
    },

    /**
     * gestion des formulaires
     *  */ 

    
    { // liste des formulaires
        path: 'Formulaires',
        component: GestionFormulaireIndexComponent
    },
    { // add formulaires
        path: 'Formulaires/create',
        component: GestionFormulaireAddComponent
    },
    { // edit formulaires by id
        path: 'Formulaires/edit/:id',
        component: GestionFormulaireEditComponent
    },
    { // get single formulaires by id
        path: 'Formulaires/details/:id',
        component: GestionFormulaireDetailsComponent
    },
    /**
     * etape administrative
     *  */ 

    
    { // liste etape
        path: 'administrative',
        component: EtapeAdministrativeIndexComponent
    },
    { // add formulaires
        path: 'administrative/create',
        component: EtapeAdministrativeAddComponent
    },
  

      /**
     * control medical
     *  */ 

    
    { // liste control
        path: 'medical',
        component: ControlMedicalIndexComponent
    },
    { // add formulaires
        path: 'medical/create',
        component: ControlMedicalAddComponent
    },
    { // get single formulaires by id
        path: 'medical/details/:id',
        component: ControlMedicalDetailsComponent
    },
        /**
     * saisir dos
     *  */ 

    
    { // liste saisir dos
        path: 'saisie',
        component: SaisiesDossiersIndexComponent
    },
    { // add formulaires
        path: 'saisie/create',
        component: SaisiesDossiersAddComponent
    },
    { // edit formulaires by id
        path: 'saisie/edit/:id',
        component: SaisiesDossiersEditComponent},
    { // get single formulaires by id
        path: 'saisie/details/:id',
        component:SaisiesDossiersDetailsComponent
    },

     /**
     * validation
     *  */ 

    
    { // liste validation
        path: 'validation',
        component: ValidationIndexComponent
    },
    { // add validation
        path: 'validation/create',
        component: ValidationAddComponent
    },
    { // edit validation by id
        path: 'validation/edit/:id',
        component: ValidationEditComponent},
    { // get single validation by id
        path: 'validation/details/:id',
        component:ValidationDetailsComponent
    },
    /**
     *parametrage
     *  */ 

    
    { // liste parametrage
        path: 'parametrage',
        component: ParametrageIndexComponent
    },
     /**
     * gestion autorisation
     *  */ 

    
    { // liste  gestion autorisation
        path: 'autorisation',
        component: GestionautorisationIndexComponent
    },
    { // add  gestion autorisation
        path: 'autorisation/create',
        component: GestionautorisationAddComponent
    },
    { // edit  gestion autorisationby id
        path: 'autorisation/edit/:id',
        component: GestionautorisationEditComponent},
    { // get single  gestion autorisationby id
        path: 'autorisation/details/:id',
        component:GestionautorisationDetailsComponent
    },
    /**
     * parametrage formulaire
     *  */ 

    
    { // liste parametrage formulaire
        path: 'Parametrage',
        component: ParametrageFormulaireIndexComponent
    },
    { // add  parametrage formulaire
        path: 'Parametrage/create',
        component: ParametrageFormulaireAddComponent
    },
    { // edit parametrage formulaire by id
        path: 'Parametrage/edit/:id',
        component: ParametrageFormulaireEditComponent},
    { // get single parametrage formulaire by id
        path: 'Parametrage/details/:id',
        component:ParametrageFormulaireDetailsComponent
    },
     /**
     * parametrage convantion
     *  */ 

    
    { // liste parametrage convantion
        path: 'convantion',
        component: ParametrageConventionIndexComponent
    },
    { // add  parametrage convantion
        path: 'convantion/create',
        component: ParametrageConventionAddComponent
    },
    { // edit parametrage convantion by id
        path: 'convantion/edit/:id',
        component: ParametrageConventionEditComponent},
    { // get single parametrage convantion by id
        path: 'convantion/details/:id',
        component:ParametrageConventionDetailsComponent
    },
    
     /**
     * comptabilité
     *  */ 

    
    { // liste parametrage convantion
        path: 'comptabilité',
        component: ComptabilitesIndexComponent
    },
    { // add  parametrage convantion
        path: 'comptabilitécreate',
        component: ComptabilitesAddComponent
    },
    { // edit parametrage convantion by id
        path: 'comptabilité/edit/:id',
        component: ComptabilitesEditComponent
    },
    { // get single parametrage convantion by id
        path: 'comptabilité/details/:id',
        component:ComptabilitesDetailleComponent
    },
    
     /**
     *spécifier les montants
     *  */ 

    
    { // liste spécifier les montants
        path: 'spécifier les montants',
        component: SpecifierlesmontantsIndexComponent
    },
    { // add  parametrage convantion
        path: 'spécifier les montants/create',
        component:SpecifierlesmontantsAddComponent
    },
     /**
     *consulter avis medical valide
     *  */ 

    
    { // listeconsulter avis medical valide
        path: 'consulter avis medical valide',
        component: ConsulterAvisMedicalValideIndexComponent
    },
    { // add  consulter avis medical valide
        path: 'consulter avis medical valide/create',
        component:ConsulterAvisMedicalValideAddComponent
    },
    
]

