<div class="line">
    <div class="label">
        {!! in_array('required',$rules)?'<span class="ub-text-danger ub-text-bold">*</span>':'' !!}
        @if($tip)
            <a class="ub-text-muted" href="javascript:;" data-tip-popover="{{$tip}}"><i class="iconfont icon-warning"></i></a>
        @endif
        @if(!empty($label))
            {{$label}}
        @endif
    </div>
    <div class="field">
        <div class="value">{{null===$value?$defaultValue:$value}}</div>
        <input type="hidden" name="{{$name}}" value="{{null===$value?$defaultValue:$value}}"/>
        @if(!empty($help))
            <div class="help">{!! $help !!}</div>
        @endif
    </div>
</div>
