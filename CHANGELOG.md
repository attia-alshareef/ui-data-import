# Change history for ui-data-import

## [1.8.3](https://github.com/folio-org/ui-data-import/tree/v1.8.3) (2020-04-27)

### Features added:
* Data Import field mapping profile details: Repeatable field dropdown component (UIDATIMP-401)
* Data Import field mapping profile details: Reference values dropdown component (UIDATIMP-402)
* Data Import field mapping profile details: Checkbox decorator (UIDATIMP-368)
* Cover MCL in mapping profile details sections with tests (UIDATIMP-469)
* Distinguish not mapped and unmappable fields in Field mapping profile View screen (UIDATIMP-471)
* Implement <ProhibitionIcon> component (UIDATIMP-477)
* Field mapping profile - Add line above associated action profiles (UIDATIMP-472)
* Label for Year field in caption section has been updated (UIDATIMP-475)
* Preceding/succeeding sections has been updated to match new Instance fields (UIDATIMP-476)
* Update dependency on stripes-smart-components to version 3.1.1 (UIDATIMP-485)
* Implement date picker decorator (UIDATIMP-407)
* Add validation for field mapping profile fields (UIDATIMP-405)

### Bugs fixed:
* When returned to search results screen after profile save, wrong profile details show (UIDATIMP-424)
* Optional sections are collapsed even if contain data (UIDATIMP-479)
* Fix tree lines in Job profile associations tree (UIDATIMP-343)
* Fix displaying of profile associations on a job profile tree (UIDATIMP-413)

## [1.8.2](https://github.com/folio-org/ui-data-import/tree/v1.8.2) (2020-04-07)

### Features added:
* Render Repeatable Fields as MultiColumnList in FlexibleForm static view when needed (UIDATIMP-445)
* Cover mapping profile details sections with tests (UIDATIMP-406)

### Bugs fixed:
* More than one record cannot be created in Mapping Profiles Form repeatable fields (UIDATIMP-443)
* Error message when assigning or unassigning a tag to a data import profiles (UIDATIMP-461)
* Trash can next to match profile match criteria should not be there (UIDATIMP-466)

## [1.8.1](https://github.com/folio-org/ui-data-import/tree/v1.8.1) (2020-03-31)

### Features added:
* Data Import Field Mapping Profile details: Inventory instance from MARC (UIDATIMP-15)
* Data Import Field Mapping Profile details: Inventory holdings from MARC Bib (UIDATIMP-290)
* Data Import Field Mapping Profile details: Inventory item from MARC Bib (UIDATIMP-292)
* Rearrange the match profile diagram structure (UIDATIMP-411)
* Wipe out lines from the match profile diagram (UIDATIMP-411)
* Provide a profile snapshot with childWrappers when new profile association added to a job profile (UIDATIMP-413)
* Data import settings Match Profiles: Changes for Static value Number, Date submatches (UIDATIMP-414)
* Set defaultMapping query param when data-import process is run with chosen JobProfile to false (UIDATIMP-418)
* Add "profileType" query param to request for get /profileSnapshots/{profileId} (UIDATIMP-444)

### Bugs fixed:
* Fix broken Record Type Selection Tree in RTL mode (UIDATIMP-425)
* Fix broken Match criterion section in RTL mode (UIDATIMP-426)
* Mapping Profiles Form existing record type recognition behavior is wrong (UIDATIMP-456)
* Fix hardcoded tenant value for the modules retrieving (UIDATIMP-465)
* Fix styles for the form text fields (UIDATIMP-426)

## [1.8.0](https://github.com/folio-org/ui-data-import/tree/v1.8.0) (2020-03-13)

### Features added:
* Attach a field mapping profile to an action profile that does not have one (UIDATIMP-269)
* Attach one or more action profiles to a field mapping profile (UIDATIMP-279)
* Create ProfileTree Component (UIDATIMP-326)
* Job profile details, part 1: adding match profiles (UIDATIMP-312)
* Job profile details, part 2: adding secondary match/action profiles (UIDATIMP-313)
* Add rules for prohibited profile siblings for the ProfileTree component (UIDATIMP-314)
* Job profile details, part 4: unlinking match or action profiles (UIDATIMP-315)
* Create FOLIO records' field lists (UIDATIMP-330)
* Connect Profile Associator Component to unified data source (UIDATIMP-341)
* Update field naming for mapping profiles (UIDATIMP-349)
* Data import settings page's 4th pane for Match Profiles: Changes needed to support Static value submatches (UIDATIMP-352)
* Connect Profile Tree Component to unified data source (UIDATIMP-357)
* Rework ProfileLinker Component (UIDATIMP-358)
* Data import settings page's 4th pane for Match Profiles: Create MARC records' match-to section (UIDATIMP-373)
* Convert Match Profiles form Existing Record Field name to JSONPath format (UIDATIMP-375)
* Define API Contract for MappingProfile field mapping definitions (UIDATIMP-377)
* Remove extra action buttons in profiles Settings screens (UIDATIMP-394 - UIDATIMP-397)
* Augment RecordTypeSelector component with Incoming Record Type selection dropdown (UIDATIMP-386)
* Job profile details: suppress the delete/trash can icon (UIDATIMP-390)
* Job Profile Tree: Changes needed to support Static value submatches (UIPFIMP-11)
* Add "defaultMapping" query param to "/processFiles" path (UIDATIMP-417)
* Add caret to the incoming record select dropdown in match profile
* Upgrade Stripes and all the dependencies to version 3.0.0 (UIDATIMP-422)
* Rename renewal.json to ongoing.json (UIDATIMP-428)
* Remove extra action buttons in File extension Settings screens after central component update (UIDATIMP-398)

### Bugs fixed:
* Profile Associator lists are empty when the user reloads the page with Profile Edit Form open (UIDATIMP-338)
* ProfileTree component TreeLines re-renders are late by one tick from state updates (UIDATIMP-343)
* ProfileTree component ProfileLinker dropdown doesn't close automatically after list option has chosen (UIDATIMP-345)
* Associated profiles not clearing out after viewing, like they should (UIDATIMP-354)
* Search and Sort don't work in Profile Associator Component in view mode (UIDATIMP-374)
* Fix wording of unlink confirmation modal (UIDATIMP-378)
* Fix wording of profile create/update confirmation toast (UIDATIMP-379)
* Page unstable error when trying to save match profile (UIDATIMP-380)
* Unlink action profile from field mapping profile is not working (UIDATIMP-381)
* ProfileAssociator Component lists are empty (UIDATIMP-399)
* Fix UI tests (UIDATIMP-399)
* Fix action profiles' sequence in job profiles (UIDATIMP-412)
* Wipe out linked profiles when duplicate a profile (UIDATIMP-410)
* Fix unlinking associated profiles from job profile (UIDATIMP-420)
* Fix Match Profile regressions (UIDATIMP-421)
* Fix existing record field name displaying on match profiles (UIDATIMP-427)

## [1.7.3](https://github.com/folio-org/ui-data-import/tree/v1.7.3) (2019-12-04)
* Update sorting query for jobs (UIDATIMP-346)
* Fix typo in a field mapping profile modal (UIDATIMP-336)

## [1.7.2](https://github.com/folio-org/ui-data-import/tree/v1.7.2) (2019-12-04)
* Add action options to choose jobs screen (UIDATIMP-268)
* Add non-editable mode feature for RecordTypesSelect component (UIDATIMP-323)
* Add match details to the View match profile details pane (UIDATIMP-239)
* Create Match Profiles Form renderer (UIDATIMP-325)
* Increase the width of the View details pane for Match profiles (UIDATIMP-332)
* Create Associator Component (UIDATIMP-275)
* Attach a field mapping profile to an action profile that does not have one (UIDATIMP-269)
* Attach one or more action profiles to a field mapping profile (UIDATIMP-279)
* Fix sentence case for Qualifier field dropdowns in Create/View match profile details (UIDATIMP-340)

## [1.6.0](https://github.com/folio-org/ui-data-import/tree/v1.6.0) (2019-11-01)
* Add details section on create/edit action profile form (UIDATIMP-207)
* Add details section of action profile details pane (UIDATIMP-280)
* Update format of settings cancel/save options (UIDATIMP-238)
* Add associated job profiles search on match profile details pane (UIDATIMP-178)
* Update requests for retrieving logs and jobExecutions (UIDATIMP-304)
* Fix unstable message for job profiles (UIDATIMP-305)
* Create "view all" log screen (UIDATIMP-285)
* Add search details for the "view all" log screen (UIDATIMP-286)
* Add filter details for the "view all" log screen (UIDATIMP-287)
* Update query for sorting by numeric field (UIDATIMP-310)
* Update dependency on source-record-manager (UIDATIMP-318)
* Remove "React to" from action profiles(UIDATIMP-316)

## [1.5.1](https://github.com/folio-org/ui-data-import/tree/v1.5.1) (2019-09-25)
* Create Section component (UIDATIMP-278)
* Create and integrate RecordTypesSelect component (UIDATIMP-244)
* Add a Records column to a job logs table, rename Import ID column to ID, swap columns and change width of panes (UIDATIMP-260)
* Fix save match profile (UIDATIMP-282)

## [1.5.0](https://github.com/folio-org/ui-data-import/tree/v1.5.0) (2019-09-10)
* Implement mapping profile duplication feature (UIDATIMP-228)
* Implement mapping profile deletion feature (UIDATIMP-229)
* Make mapping profile name a hotlink in action profile details (UIDATIMP-214)
* Add tags accordion for match profiles (UIDATIMP-18)
* Create TreeView component (UIDATIMP-243)
* Add choose jobs screen 2nd pane (UIDATIMP-257)
* Add job profile details pane on choose job profile page (UIDATIMP-258)
* Fix file extension validation by making it case insensitive (UIDATIMP-252)
* Add associated job profiles search on action profile details pane (UIDATIMP-217)
* Integrate updated MultiColumnList component (UIDATIMP-276)

## [1.4.0](https://github.com/folio-org/ui-data-import/tree/v1.4.0) (2019-08-02)
* Create data import settings page's 3rd pane for action profiles (UIDATIMP-8)
* Implement header caret actions for action profiles (UIDATIMP-14)
* Add form for new action profile action (UIDATIMP-144)
* Implement save the new action profile feature (UIDATIMP-145)
* Implement details view for action profiles (UIDATIMP-146)
* Add search box for 3rd pane of action profiles (UIDATIMP-167)
* Create edit action profile form (UIDATIMP-149)
* Add saving of edited action profile feature (UIDATIMP-220)
* Implement action profile deletion feature (UIDATIMP-215)
* Implement action profile duplication feature (UIDATIMP-148)
* Make job profile name a hotlink in action profile details (UIDATIMP-213)
* Add tags accordion for match profiles (UIDATIMP-16)
* Add tags accordion for action profiles (UIDATIMP-17)
* Create data import settings page's 3rd pane for Field Mapping Profiles (UIDATIMP-9)
* Implement details view for mapping profiles (UIDATIMP-219)
* Implement create mapping profile feature (UIDATIMP-227)
* Implement edit mapping profile feature (UIDATIMP-230)
* Generalize and modularize Modals and Toasts templates, create common Callout renderer (UIDATIMP-210)
* Generalize and modularize Entity List View templates, create common ListView component (UIDATIMP-211)
* Add fields to edit mapping profile screen (UIDATIMP-247)

## [1.3.0](https://github.com/folio-org/ui-data-import/tree/v1.3.0) (2019-06-12)
* Create data import settings page's 3rd pane for Match Profiles. Add string capitalization (capitalize) and HTML special chars decoding (htmlDecode) utils (UIDATIMP-6)
* Create temporary MARC Bib files load option on Choose jobs pane (UIDATIMP-185)
* Add Search box for 3rd pane of Match Profiles (UIDATIMP-166)
* Implement landing page changes when temporary MARC Bib Load option button pushed (UIDATIMP-186)
* Create the form for a new match profile creation (UIDATIMP-138)
* Reorganize testing folder structure and code improvements (UIDATIMP-200)
* Implement details view for match profiles (UIDATIMP-140)
* Save the new match profile (UIDATIMP-139)
* Create edit match profile form (UIDATIMP-143)
* Implement saving of edited match profile (UIDATIMP-182)
* Make job profile name a hotlink in match profile details (UIDATIMP-184)
* Implement match profile duplication feature (UIDATIMP-142)
* Implement match profile deletion feature (UIDATIMP-144)
* Refactor all the profile list views to generalize them and move common parts to separate components (UIDATIMP-201)
* Create ListTemplate and ColumnTemplate components for declarative definition of EntityList (UIDATIMP-201)
* Create MenuTemplate and ItemTemplate  components for declarative definition of ActionMenu, create ActionMenu component (UIDATIMP-201)
* Create Spinner and LastMenu components (UIDATIMP-201)
* Create LogViewer and modular CodeHighlight components among with modular language definitions (langJSON and langRAW for now) and 2 highlight themes (light - Coy and dark - Stalker) (UIDATIMP-209)
* Refine ViewJobLog page component with a new endpoint to show all the log including error ones through LogViewer component (UIDATIMP-209)
* Add missing icons for Match Profiles record types (UIDATIMP-194)
* Implement match profile deletion feature (UIDATIMP-176)

## [1.2.1](https://github.com/folio-org/ui-data-import/tree/v1.2.1) (2019-05-14)
* Downgrade okapi interface version in order to have data-import-converter-storage API endpoints work (UIDATIMP-195)

## [1.2.0](https://github.com/folio-org/ui-data-import/tree/v1.2.0) (2019-05-10)
* Create data import settings page's 3rd pane for Jobs Profiles (UIDATIMP-6)
* Add job profile form (UIDATIMP-132)
* Delete upload definition when it does not have files on the landing page so the user can start over new uploading process (UIDATIMP-110)
* Implement search job profiles feature (UIDATIMP-164)
* Implement save the new job profile feature (UIDATIMP-136)
* Implement job profile editing feature (UIDATIMP-137)
* Implement details view for job profiles feature (UIDATIMP-133)
* Align wording for the create new job profile submit button (UIDATIMP-179)
* Implement job profile duplication feature (UIDATIMP-134)
* Handle text wrapping issue in columns of the job profile results list (UIDATIMP-190)
* Implement job profile deletion feature (UIDATIMP-173)
* Handle text wrapping issue in columns of the job profile results list (UIDATIMP-190)
* Implement caret actions and items selection for job profiles (UIDATIMP-12)
* Add status check for failed backend responses on the UI (UIDATIMP-189)
* Create Log button in the jobs log list for showing the resulting SRS JSON document (UIDATIMP-187)

## [1.1.0](https://github.com/folio-org/ui-data-import/tree/v1.1.0) (2019-03-22)
* Add file extensions validation and `InvalidFilesModal` component for file upload (UIDATIMP-46)
* Hide popover when user clicks on the link button (UIDATIMP-71)
* Write documentation for `FileUploader` component and some code refactor (UIDATIMP-65)
* Create UI for styling for `Completed` file uploads (UIDATIMP-38)
* Prevent user navigation when file upload is in progress (UIDATIMP-67)
* Add document icon to upload file items (UIDATIMP-74)
* Setup BigTest and write tests for Jobs pane (UIDATIMP-75)
* Implement deleting failed files from server feature (UIDATIMP-72)
* Handle file name issue with file upload definition (UIDATIMP-97)
* Show error message on UI when there is not enough server space for uploaded file(s) on uploading job profiles (UIDATIMP-86)
* Create data import settings page's 3rd pane for File Extensions (UIDATIMP-47)
* Show modal on Leaving Choose Job Profile page (UIDATIMP-104)
* Prohibit file upload when there is a draft job in progress (UIDATIMP-106)
* Implement add new file extension feature (UIDATIMP-56)
* Handle sorting icons for both job logs and file extensions tables (UIDATIMP-124)
* Update API endpoints on UI due to changes on backend across the application (UIDATIMP-112, UIDATIMP-113, UIDATIMP-114)
* Implement "Save the new file extension" feature (UIDATIMP-79)
* Implement return to Choose Job Profile page functionality (UIDATIMP-103)
* Write tests for return to Choose Job Profile page functionality (UIDATIMP-154)
* Implement file extension editing feature (UIDATIMP-84)
* Fix file extensions order after adding/editing a file extension (UIDATIMP-159)
* Close invalid files modal after clicking "Choose other files to upload" button (UIDATIMP-160)
* Implement "Reset all extension mappings to system defaults" feature (UIDATIMP-55)
* Create data import File Extension Details view (UIDATIMP-61)
* Implement file extension deletion feature (UIDATIMP-69)
* Implement search file extensions feature (UIDATIMP-157)
* Handle horizontal scroll issue for the file extensions list (UIDATIMP-76)
* Hook up file upload behavior to file extension settings when uploads for certain extensions are forbidden (UIDATIMP-117)

## [1.0.0](https://github.com/folio-org/ui-data-import/tree/v1.0.0) (2018-11-10)
* New app created with stripes-cli
* Adjust skeleton application (UIDATIMP-2)
* Add app icon (UIDATIMP-19)
* Add layout for landing page (UIDATIMP-20)
* Add layout for first pane on Landing page (UIDATIMP-22)
* Create a reusable stripes component for "Preview" & "Running Jobs" boxes (UIDATIMP-31)
* Create UI for "File Upload" feature on Landing page (UIDATIMP-33)
* Create reusable react "Drag and Drop" component (UIDATIMP-35)
* Implement "Preview jobs" feature on Landing page (UIDATIMP-23)
* Implement "Logs" feature on Landing page (UIDATIMP-29)
* Update stripes-* dependencies and imports to use stripes framework 1.0 (FOLIO-1549)
* Implement data fetching for JobExecutions and JobLogs on Landing Page (UIDATIMP-27)
* Add Data Import settings page (UIDATIMP-5)
* Create UI for File Upload: Action & Styling for "In Process" file uploads (UIDATIMP-37)
