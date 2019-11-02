<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    protected $guard_name = 'api';
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        $employee = Role::create(['guard_name' => 'api', 'name' => 'employee']);
        $manager = Role::create(['guard_name' => 'api','name' => 'manager']);
    }
}
