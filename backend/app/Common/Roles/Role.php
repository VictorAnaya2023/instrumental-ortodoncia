<?php namespace Common\Auth\Roles;

use App\User;
use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property boolean $default
 * @property-read Collection|User[] $users
 * @mixin Eloquent
 */
class Role extends Model
{
    use HasPermissionsRelation;

    /**
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * @var array
     */
    protected $hidden = ['pivot'];

    /**
     * @var array
     */
    protected $casts = [
        'id' => 'integer', 
        'default' => 'boolean'
    ];

    /**
     * Get default role for assigning to new users.
     *
     * @return Role|null
     */
    public function getDefaultRole()
    {
        return $this->where('default', 1)->first();
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_role')
            ->withPivot('created_at');
    }
}
