<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\User; //load the user model for querying the user table

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        
        //Create  Permissions
        $view_timesheet = Permission::create(['guard_name' => 'api','name' => 'view timesheet']);
        $create_timesheet = Permission::create(['guard_name' => 'api','name' => 'create timesheet']);
        $edit_timesheet = Permission::create(['guard_name' => 'api','name' => 'edit timesheet']);
        $delete_timesheet = Permission::create(['guard_name' => 'api','name' => 'delete timesheet']);
        $approve_timesheet = Permission::create(['guard_name' => 'api','name' => 'approve timesheet']);

        //Retrieve Role models 
        $employee = Role::where('name','employee')->first();
        $manager = Role::where('name','manager')->first();

        //Give roles permissions
        $employee->givePermissionTo($view_timesheet);
        $employee->givePermissionTo($create_timesheet);
        $employee->givePermissionTo($edit_timesheet);

        $manager->givePermissionTo($approve_timesheet);
        $manager->givePermissionTo($view_timesheet);
        $manager->givePermissionTo($edit_timesheet);
        $manager->givePermissionTo($delete_timesheet);

        //Here I create 3 managers from users that have been seeded

        //Eloquent query builder same as 'SELECT * FROM users WHERE id = 1'
        $manager1 = User::where('id',1)->first();
        $manager2 = User::where('id',2)->first();
        $manager3 = User::where('id',3)->first();

        $manager1->assignRole('manager');
        $manager2->assignRole('manager');
        $manager3->assignRole('manager');

        //Assign the other 6 users as employees
        $employee_list = [
        0 => 4,
        1 => 5,
        2 => 6,
        3 => 7,
        4 => 8,
        5 => 9,
        6 => 10,
        ];

        foreach ($employee_list as $id) {
            $e = User::where('id',$id)->first();
            $e->assignRole('employee');
        }


    }
}
