<?php

namespace Common\Roles;

use Arr;

class CrupdateRole
{
    use SyncsPermissions;

    /**
     * @var Role
     */
    private $role;

    /**
     * @param Role $role
     */
    public function __construct(Role $role)
    {
        $this->role = $role;
    }

    /**
     * @param array $data
     * @param Role $role
     * @return Role
     */
    public function execute($data, $role = null)
    {
        if ( ! $role) {
            $role = $this->role->newInstance([]);
        }

        $attributes = [
            'name' => $data['name'],
            'description' => $data['description'] ?? null,
            'default' => $data['default'] ?? false
        ];

        $role->fill($attributes)->save();

        return $role;
    }
}
